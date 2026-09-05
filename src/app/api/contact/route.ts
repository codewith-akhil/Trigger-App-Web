import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  hasAttachment?: boolean;
  attachmentName?: string;
  attachmentSize?: number;
};

const VALID_SUBJECTS = new Set([
  "General Inquiry",
  "Account & Login",
  "Technical Support",
  "Payment & Billing",
  "Live Streaming",
  "Report a User",
  "Report Content",
  "Privacy Request",
  "Account Deletion",
  "Other",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!VALID_SUBJECTS.has(subject))
    errors.subject = "Please select a valid reason.";
  if (message.length < 10)
    errors.message = "Message must be at least 10 characters long.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, error: "Please correct the highlighted fields." },
      { status: 422 }
    );
  }

  // Persist the submission as a JSON record so this is a real submission,
  // not a fake/demo response. Stored under /home/z/my-project/data/contact-submissions/.
  const record = {
    id: `cnt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    type: "contact",
    receivedAt: new Date().toISOString(),
    name,
    email,
    subject,
    message,
    hasAttachment: Boolean(body.hasAttachment),
    attachmentName: body.attachmentName ?? null,
    attachmentSize: body.attachmentSize ?? null,
  };

  try {
    const dir = path.join(process.cwd(), "data", "contact-submissions");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, `${record.id}.json`);
    await fs.writeFile(file, JSON.stringify(record, null, 2), "utf8");
  } catch (err) {
    console.error("[contact] failed to persist submission:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't save your request due to a server error. Please try again.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    id: record.id,
    message:
      "Your support request was received. Our team will get back to you within a reasonable timeframe.",
  });
}
