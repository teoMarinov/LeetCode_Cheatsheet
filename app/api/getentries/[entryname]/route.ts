import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

interface IParams {
  entryname?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    const data = await db.entry.findMany({
      where: {
        userId,
        name: {
          contains: params.entryname,
        },
      },
    });

    return NextResponse.json(data);
  } catch (err: any) {
    console.log(err, "Error newEntry");
    return new Response("Catch Error newEntry");
  }
}
