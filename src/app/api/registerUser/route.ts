import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import Joi from "joi";
import { hashPassword } from "@/lib/bcrypt";
import { users } from "@/lib/db/schema/users";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { error } = validateData(body);
    if (error)
      return new Response(error.details[0].message, {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    const hashedPassword = await hashPassword(body.password);
    const updateData = {
      ...body,
      password: hashedPassword,
    };

    const response = await db.insert(users).values(updateData).returning();

    return new Response(
      JSON.stringify({
        data: response[0],
        Message: "User Created Successfully",
      }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (err: any) {
    if (err.code === "23505") {
      return NextResponse.json(
        {
          message: "Email already exists.",
        },
        { status: 403 }
      );
    } else
      return NextResponse.json(
        {
          error: err,
        },
        { status: 404 }
      );
  }
}

const validateData = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};
