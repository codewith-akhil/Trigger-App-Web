import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

type ReportPayload = {
  name?: string;
  email?: string;
  reportType?: string;
  target?: string;
  description?: string;
  hasAttachment?: boolean;
  attachmentName?: string;
  attachmentSize?: number;
};

const VALID_REPORT_TYPES = new Set([
  "User / Profile",
  "Message",
  "Photo / Video",
  "Live Stream",
  "Scheduled Stream",
  "Harassment or Bullying",
  "Spam or Scam",
  "Impersonation",
  "Hate or Abusive Content",
  "Sexual or Explicit Content",
  "Illegal Content",
  "Copyright Infringement",
  "Payment / Financial Fraud",
  "Other",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: ReportPayload;
  try {
    body = (await req.json()) as ReportPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const reportType = (body.reportType ?? "").trim();
  const target = (body.target ?? "").trim();
  const description = (body.description ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!VALID_REPORT_TYPES.has(reportType))
    errors.reportType = "Please select a valid report type.";
  if (description.length < 10)
    errors.description =
      "Description must be at least 10 characters long.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, error: "Please correct the highlighted fields." },
      { status: 422 }
    );
  }

  const record = {
    id: `rep_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    type: "report",
    receivedAt: new Date().toISOString(),
    name,
    email,
    reportType,
    target: target || null,
    description,
    hasAttachment: Boolean(body.hasAttachment),
    attachmentName: body.attachmentName ?? null,
    attachmentSize: body.attachmentSize ?? null,
  };

  try {
    const dir = path.join(process.cwd(), "data", "report-submissions");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, `${record.id}.json`);
    await fs.writeFile(file, JSON.stringify(record, null, 2), "utf8");
  } catch (err) {
    console.error("[report] failed to persist submission:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't submit your report due to a server error. Please try again.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    id: record.id,
    message:
      "Your report was received and will be reviewed by our moderation team.",
  });
}
