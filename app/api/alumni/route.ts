import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
  try {
    // Parse query parameters for pagination and sorting
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const sortBy = searchParams.get("sortBy") || "name";
    const order = searchParams.get("order") || "asc";

    // Calculate the start index for pagination
    const start = (page - 1) * limit;

    // Fetch alumni data with sorting and pagination
    const alumni = await client.fetch(
      `*[_type == "alumni"] | order(${sortBy} ${order})[${start}...${start + limit}]{
        name,
        Batch,
        email,
        currentPosition,
      }`
    );

    // Fetch total alumni count for pagination
    const totalCount = await client.fetch('count(*[_type == "alumni"])');

    // Return response with data and pagination info
    return NextResponse.json({
      data: alumni,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch alumni data" },
      { status: 500 }
    );
  }
}
