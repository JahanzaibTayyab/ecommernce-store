import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { eq } from "drizzle-orm";
import Joi from "joi";
import { comparePassword } from "@/lib/bcrypt";
import { users } from "@/lib/db/schema/users";
import { signJwtAccessToken } from "@/lib/jwt";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { error } = validateData(body);
    if (error)
      return new Response(error.details[0].message, {
        status: 400,
      });
    const response = await db
      .select()
      .from(users)
      .where(eq(users.email, body.email));
    if (response.length > 0) {
      const isPasswordMatch = await comparePassword(
        body.password,
        response[0].password
      );
      if (isPasswordMatch) {
        const { password, ...userWithoutPass } = response[0];
        const result = {
          ...userWithoutPass,
        };
        return new Response(JSON.stringify({ user: result }), {
          status: 200,
        });
      } else {
        return new Response(
          JSON.stringify({ message: "Password not matched" }),
          {
            status: 404,
          }
        );
      }
    } else {
      return new Response(
        JSON.stringify({ message: "User not found against this email" }),
        {
          status: 404,
        }
      );
    }
  } catch (err) {
    NextResponse.json({
      error: "Please try again!!",
    });
  }
}

const validateData = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};
