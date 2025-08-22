import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";
import nodemailer from "nodemailer";
import { structuredHTML } from "./helper";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, subject, email, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Save to Sanity
    const newSubmission = await client.create({
      _type: "contact",
      ...body,
      submittedAt: new Date().toISOString(),
    });

    // ✅ Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // ✅ SSL for 465, TLS for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Email HTML
    const htmlContent = structuredHTML(name, email, subject, message);

    // ✅ Send Email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Contact Form Submission: ${subject}`,
      html: htmlContent,
    });

    return NextResponse.json(
      {
        message: "Contact submission saved & email sent successfully",
        submission: newSubmission,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Contact API Error:", error);
    return NextResponse.json(
      { message: "Failed to process contact submission", error },
      { status: 500 }
    );
  }
}
