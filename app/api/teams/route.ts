import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";

export const dynamic = "force-dynamic";

// GET request → Fetch all team members from Sanity
export async function GET(req: NextRequest) {
  console.log(`${req.method} ${req.url}`);
  try {
    const query = `*[_type == "team"]{
      _id,
      name,
      position,
      "image": image.asset->url,
      socials
    } | order(name asc)`;

    const teamMembers = await client.fetch(query);

    return NextResponse.json(teamMembers, { status: 200 });
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { message: "Failed to fetch team members", error },
      { status: 500 }
    );
  }
}

// POST request → Create a new team member in Sanity
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const newMember = await client.create({
//       _type: "team",
//       ...body,
//     });

//     return NextResponse.json(
//       { message: "Team member created successfully", member: newMember },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating team member:", error);
//     return NextResponse.json(
//       { message: "Failed to create team member", error },
//       { status: 500 }
//     );
//   }
// }
