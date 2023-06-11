import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  console.log(body);
  try {
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify({
    //     email_address: data.email_address,
    //     status: data.status,
    //   }),
    // });
    // return NextResponse.json({
    //   To: "User",
    //   Message: "Subscribed",
    // });
  } catch (err) {
    NextResponse.json({
      error: "Please try again!!",
    });
  }
}
