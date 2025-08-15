import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";

export const dynamic = "force-dynamic";

// GET request → Fetch all contact form submissions
export async function GET(req: NextRequest) {
  try {
    const query = `*[_type == "contact"] | order(submittedAt desc) {
      _id,
      name,
      subject,
      email,
      message,
      submittedAt
    }`;

    const submissions = await client.fetch(query);

    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { message: "Failed to fetch contact submissions", error },
      { status: 500 }
    );
  }
}

// POST request → Create a new contact form submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newSubmission = await client.create({
      _type: "contact",
      ...body,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Contact submission saved successfully",
        submission: newSubmission,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return NextResponse.json(
      { message: "Failed to save contact submission", error },
      { status: 500 }
    );
  }
}
