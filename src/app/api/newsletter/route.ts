import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  if (!body.email || !body.email.length) {
    return new NextResponse("Please include your email in the POST request");
  }
  try {
    const { url, data, headers } = getRequestParams(body.email);

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email_address: data.email_address,
        status: data.status,
      }),
    });
    return NextResponse.json({
      To: "User",
      Message: "Subscribed",
    });
  } catch (err) {
    NextResponse.json({
      error: "Please try again!!",
    });
  }
}

const getRequestParams = (email: string) => {
  const API_KEY = process.env.NEXT_PRIVATE_MAILCHIP_KEY as string;
  const LIST_ID = process.env.NEXT_PRIVATE_MAILCHIP_AUDINCE_KEY;

  const DATACENTER = API_KEY.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
};
