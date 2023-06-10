// import { db } from '@/lib/db/drizzle';
// import { NewCartItem, dine_market_cart } from '@/lib/db/schema';
// import { sql } from 'drizzle-orm';
import { NextRequest, NextResponse } from "next/server";
// import { asc, eq } from 'drizzle-orm';
import Stripe from "stripe";

const key = process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY || "";
const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const userId = request.headers.get("authorization");
  const body = await request.json();
  console.log("🚀 ~ file: route.ts:16 ~ POST ~ body:", body);
  try {
    if (userId) {
      try {
        const result = [];
        if (result.length != 0) {
          const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: "pay",
            mode: "payment",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            shipping_options: [
              { shipping_rate: "shr_1NHVStCrT5XqHJbIcGQh8S9w" },
              { shipping_rate: "shr_1NHVQpCrT5XqHJbIQgXkFymH" },
              { shipping_rate: "shr_1NHVUpCrT5XqHJbI9Nfnc9ve" },
            ],
            line_items: result.map((item) => {
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.product_name,
                    images: [item.product_image_url],
                  },
                  unit_amount: item.product_price * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.product_quantity,
              };
            }),

            phone_number_collection: {
              enabled: true,
            },
            shipping_address_collection: {
              allowed_countries: ["US", "CA", "GB", "PK"],
            },
            invoice_creation: {
              enabled: true,
            },
            allow_promotion_codes: true,

            success_url: `${request.headers.get(
              "origin"
            )}/api/onSuccessPayment?session_id={CHECKOUT_SESSION_ID}&user_id=${userId}`,
            cancel_url: `${request.headers.get("origin")}/cart`,
          };
          const session = await stripe.checkout.sessions.create(params);
          return NextResponse.json(session, { status: 200 });
        } else {
          return NextResponse.json({ success: false }, { status: 500 });
        }
      } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
      }
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
