import { NextResponse } from "next/server";
import { company } from "@/lib/company";
import { contactSchema } from "@/lib/contact-schema";

/** Contact submissions are never prerendered or cached. */
export const dynamic = "force-dynamic";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const { name, email, phone, subject, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  // ---------------------------------------------------------------------
  // No API key configured — accept the submission and log it, so the form is
  // fully usable in local development without credentials.
  //
  // TODO: set RESEND_API_KEY (and CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL) in
  // .env.local or the Vercel project settings to switch real delivery on. See
  // README.md → "Wiring up email" for the Nodemailer/SMTP alternative.
  // ---------------------------------------------------------------------
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set — logging submission instead of sending email.",
    );
    console.info("[contact] submission", { name, email, phone, subject, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    // Imported lazily so the SDK is only loaded when email is actually enabled.
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `${company.shortName} Website <${from}>`,
      to: [to],
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2 style="font-family:sans-serif">New enquiry from the Techno Hub website</h2>
        <table style="font-family:sans-serif;border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${escapeHtml(subject)}</td></tr>
        </table>
        <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected failure sending email:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again." },
      { status: 500 },
    );
  }
}
