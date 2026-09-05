"use client";

import * as React from "react";
import {
  LegalHeader,
  LegalFooter,
} from "./legal/legal-primitives";

const SUBJECTS = [
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
];

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; id: string; message: string }
  | { kind: "error"; message: string; errors?: Record<string, string> };

export function ContactPage() {
  const [status, setStatus] = React.useState<Status>({ kind: "idle" });
  const [fileName, setFileName] = React.useState<string | null>(null);
  const [fileSize, setFileSize] = React.useState<number | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      hasAttachment: Boolean(fileName),
      attachmentName: fileName ?? undefined,
      attachmentSize: fileSize ?? undefined,
    };

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({
          kind: "success",
          id: data.id,
          message: data.message,
        });
        formRef.current?.reset();
        setFileName(null);
        setFileSize(null);
      } else {
        setStatus({
          kind: "error",
          message: data.error ?? "Submission failed. Please try again.",
          errors: data.errors,
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message:
          "Network error. Please check your connection and try again.",
      });
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setFileName(f?.name ?? null);
    setFileSize(f?.size ?? null);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LegalHeader title="Contact Us" />

      <main className="flex-1">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 py-12 sm:py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="text-brand-dark font-semibold uppercase tracking-[0.18em] text-xs">
              Support
            </div>
            <h1 className="mt-3 text-[34px] sm:text-[44px] font-extrabold leading-[1.1] text-ink">
              Contact Us
            </h1>
            <p className="mt-4 text-[16px] text-body text-left max-w-[640px] mx-auto">
              If you need help with Trigger, have a question, or want to report
              an issue, contact our support team.
            </p>
          </div>

          {/* Get in Touch */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-ink mb-4">Get in Touch</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:METRICFLUXSOLUTIONS@GMAIL.COM"
                className="bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3 hover:bg-brand-mint/50 transition-colors"
              >
                <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-dark">
                  Email
                </div>
                <div className="text-[14px] text-ink font-medium break-all mt-0.5">
                  METRICFLUXSOLUTIONS@GMAIL.COM
                </div>
              </a>
              <a
                href="tel:+919746109569"
                className="bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3 hover:bg-brand-mint/50 transition-colors"
              >
                <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-dark">
                  Phone
                </div>
                <div className="text-[14px] text-ink font-medium mt-0.5">
                  +91 9746109569
                </div>
              </a>
            </div>
            <div className="mt-3 bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3">
              <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-dark">
                Company
              </div>
              <div className="text-[14px] text-ink font-bold mt-0.5">
                Metric Flux Solutions Pvt Ltd
              </div>
              <div className="text-[13px] text-body mt-1">
                46/A1, PKP Tower, Ground Floor, Kannur, Kerala, India, PIN -
                670702
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-ink mb-4">Contact Form</h2>

            {status.kind === "success" && (
              <div
                role="status"
                className="mb-5 bg-brand-mint-bg border border-brand rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-ink">
                      Request received
                    </div>
                    <p className="text-[14px] text-body mt-1 leading-relaxed">
                      {status.message}
                    </p>
                    <div className="mt-2 text-[12px] text-muted-text">
                      Reference ID:{" "}
                      <span className="font-mono text-ink">{status.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {status.kind === "error" && (
              <div
                role="alert"
                className="mb-5 bg-[#fef2f2] border border-danger/40 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-danger flex items-center justify-center text-white shrink-0">
                    <AlertIcon />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#991b1b]">
                      Couldn&apos;t submit your request
                    </div>
                    <p className="text-[14px] text-[#7f1d1d] mt-1 leading-relaxed">
                      {status.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              <Field
                label="Full Name"
                name="name"
                placeholder="Enter your name"
                error={status.kind === "error" ? status.errors?.name : undefined}
                required
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your registered email address"
                error={status.kind === "error" ? status.errors?.email : undefined}
                required
              />
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[13px] font-semibold text-ink mb-1.5"
                >
                  Subject <span className="text-danger">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className={`w-full bg-white border rounded-lg px-3 py-2.5 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-brand/40 transition-colors ${
                    status.kind === "error" && status.errors?.subject
                      ? "border-danger"
                      : "border-[#e5e7eb] focus:border-brand"
                  }`}
                >
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {status.kind === "error" && status.errors?.subject && (
                  <p className="text-[12px] text-danger mt-1">
                    {status.errors.subject}
                  </p>
                )}
              </div>
              <Field
                label="Message"
                name="message"
                placeholder="Describe your question or issue."
                textarea
                error={status.kind === "error" ? status.errors?.message : undefined}
                required
              />
              <div>
                <label
                  htmlFor="attachment"
                  className="block text-[13px] font-semibold text-ink mb-1.5"
                >
                  Attachment (Optional)
                </label>
                <label
                  htmlFor="attachment"
                  className="flex items-center gap-3 cursor-pointer border border-dashed border-[#cbd5e1] rounded-lg px-4 py-3 hover:border-brand hover:bg-brand-mint-bg/40 transition-colors"
                >
                  <UploadIcon />
                  <span className="text-[14px] text-muted-text flex-1">
                    {fileName
                      ? `${fileName}${
                          fileSize
                            ? ` · ${(fileSize / 1024).toFixed(1)} KB`
                            : ""
                        }`
                      : "Upload screenshots or relevant documents if necessary."}
                  </span>
                  {fileName && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setFileName(null);
                        setFileSize(null);
                        const input = document.getElementById(
                          "attachment"
                        ) as HTMLInputElement | null;
                        if (input) input.value = "";
                      }}
                      className="text-[12px] text-danger font-semibold hover:underline"
                    >
                      Remove
                    </button>
                  )}
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.doc,.docx,.txt"
                />
                <p className="text-[12px] text-faint mt-1">
                  Note: the attachment name is recorded with your submission.
                  The file itself is not uploaded in this demo form.
                </p>
              </div>

              <button
                type="submit"
                disabled={status.kind === "submitting"}
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl px-6 py-3 text-[15px] shadow-[0_4px_14px_rgba(0,200,83,0.25)] transition-colors"
              >
                {status.kind === "submitting" ? (
                  <>
                    <Spinner />
                    Submitting…
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </section>

          {/* Support Requests */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-ink mb-3">
              Support Requests
            </h2>
            <p className="text-[15px] text-body text-left">
              For faster assistance, include:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Your Trigger username",
                "Registered email address",
                "Relevant stream ID or booking ID, if applicable",
                "Payment ID / order ID for payment-related issues",
                "A clear description of the problem",
                "Screenshots where helpful",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[15px] text-body text-left"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-[#fef2f2] border border-danger/30 rounded-lg p-4">
              <p className="text-[14px] text-[#7f1d1d] font-semibold text-left">
                Do not share passwords, OTPs, payment PINs, or other sensitive
                authentication information.
              </p>
            </div>
          </section>

          {/* Privacy Requests */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-ink mb-3">
              Privacy Requests
            </h2>
            <p className="text-[15px] text-body text-left leading-relaxed">
              For privacy-related requests, including access, correction,
              deletion, or other applicable data-rights requests, contact us
              using the email above. Requests may require reasonable verification
              of identity before processing.
            </p>
          </section>

          {/* Response Time */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-ink mb-3">
              Response Time
            </h2>
            <p className="text-[15px] text-body text-left leading-relaxed">
              We aim to respond to support requests within a reasonable
              timeframe. Response times may vary depending on the nature and
              complexity of the request.
            </p>
          </section>

          {/* Important */}
          <section>
            <h2 className="text-[20px] font-bold text-ink mb-3">Important</h2>
            <p className="text-[15px] text-body text-left leading-relaxed">
              Trigger does not guarantee that every support request can be
              resolved immediately. Certain matters may require verification,
              investigation, payment-provider review, or action by third-party
              service providers.
            </p>
            <div className="mt-4 bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3">
              <div className="text-[14px] text-ink font-bold">
                Metric Flux Solutions Pvt Ltd
              </div>
              <div className="text-[13px] text-body mt-1">
                Kannur, Kerala, India
              </div>
              <a
                href="mailto:METRICFLUXSOLUTIONS@GMAIL.COM"
                className="block text-[13px] text-brand-dark font-semibold mt-1 hover:underline break-all"
              >
                METRICFLUXSOLUTIONS@GMAIL.COM
              </a>
              <a
                href="tel:+919746109569"
                className="block text-[13px] text-brand-dark font-semibold mt-0.5 hover:underline"
              >
                +91 9746109569
              </a>
            </div>
          </section>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

/* ---- field component ---- */
function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
  error?: string;
}) {
  const baseClass = `w-full bg-white border rounded-lg px-3 py-2.5 text-[15px] text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-brand/40 transition-colors ${
    error ? "border-danger" : "border-[#e5e7eb] focus:border-brand"
  }`;
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[13px] font-semibold text-ink mb-1.5"
      >
        {label} {required && <span className="text-danger">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${baseClass} resize-y`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
      {error && <p className="text-[12px] text-danger mt-1">{error}</p>}
    </div>
  );
}

/* ---- icons ---- */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 16V4m0 0L8 8m4-4l4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
