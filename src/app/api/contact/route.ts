import { NextRequest, NextResponse } from "next/server";

// Stub API route. Wire this up to an email service (Resend, Nodemailer + SMTP,
// or a form backend like Formspree) before deploying — right now it only
// validates the payload and logs it server-side.
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // TODO: send via your email provider of choice.
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
