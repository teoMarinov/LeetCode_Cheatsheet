"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/app/actions/getUserByEmail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields: any = RegisterSchema.safeParse(values);

  if (!validatedFields) return { error: "Invalid fields!" };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return { success: "Email success" };
};
