import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    const data = await db.entry.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json(data);
  } catch (err: any) {
    console.log(err, "Error newEntry");
    return new Response("Catch Error newEntry");
  }
}
