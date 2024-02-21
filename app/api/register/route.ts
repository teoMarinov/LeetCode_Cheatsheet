import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/app/actions/getUserByEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedFields: any = RegisterSchema.safeParse(body);

    if (!validatedFields)
      return NextResponse.json({ error: "Invalid fields!" });

    const { email, name, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (existingUser)
      return NextResponse.json({
        error: "User with this email already exists",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json({ success: "Registration successfull" });
  } catch (err: any) {
    console.log(err, "REGISTRATION_ERROR");
    return new NextResponse("Inetrnal Error Resistration", { status: 500 });
  }
}
