import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { authOptions } from "@/lib/auth";
import { Product } from "@/types/products";
import { calculateDiscountPercentage } from "@/utils/helper";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const body = await request.json();
  try {
    if (session) {
      try {
        if (body.length != 0) {
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
            line_items: body.map((item: Product) => {
              return {
                price_data: {
                  currency: "pkr",
                  product_data: {
                    name: item.name,
                  },
                  unit_amount:
                    (item.discount
                      ? calculateDiscountPercentage(item.price, item.discount)
                      : item.price) * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.quantity,
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
            success_url: `${request.headers.get("origin")}/successPay`,
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
