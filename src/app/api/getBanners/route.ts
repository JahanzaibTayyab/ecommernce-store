import { NextResponse, NextRequest } from "next/server";
import { sanityClient } from "@/lib/sanityClient";

export async function GET(req: NextRequest) {
  try {
    const response = await sanityClient.fetch(
      `*[_type == 'banner' && isActive == true] | order(name asc)`
    );
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({
      message: JSON.stringify(error),
    });
  }
}
