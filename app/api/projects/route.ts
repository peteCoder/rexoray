// /api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  console.log(`${req.method} ${req.url}`);
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const start = (page - 1) * limit;

    const query = `*[_type == "project"]{
      _id,
      title,
      description,
      moreDescription,
      startDate,
      endDate,
      "bannerImage": bannerImage.asset->url,
      "images": images[].asset->url,
      client,
      location,
      status,
      budget,
      currency
    } | order(startDate desc) [${start}...${start + limit}]`;

    const projects = await client.fetch(query);

    // Also get total count for frontend pagination UI
    const totalQuery = `count(*[_type == "project"])`;
    const total = await client.fetch(totalQuery);

    return NextResponse.json(
      { projects, total, page, totalPages: Math.ceil(total / limit) },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Failed to fetch projects", error },
      { status: 500 }
    );
  }
}
