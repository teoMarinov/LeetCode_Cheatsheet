import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, urlTo, difficulty, code, description, userId } = body;

    const newEntry = await db.entry.create({
      data: {
        name,
        urlTo,
        difficulty,
        code,
        description,
        userId,
      },
    });
    return NextResponse.json(newEntry);
  } catch (err: any) {
    console.log(err, "Error newEntry");
    return new Response("Catch Error newEntry");
  }
}
