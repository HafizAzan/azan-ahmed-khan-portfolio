import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill all fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Message is too long." },
        { status: 400 },
      );
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { ok: false, error: "Could not send message. Please try again." },
      { status: 500 },
    );
  }
}
