import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { LoginSchema } from "@/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedFields: any = LoginSchema.safeParse(body);

    if (!validatedFields)
      return NextResponse.json({ error: "Invalid fields!" });

      const { email, password } = validatedFields.data;
      
  } catch (err: any) {
    console.log(err, "REGISTRATION_ERROR");
    return new NextResponse("Inetrnal Error Resistration", { status: 500 });
  }
}
