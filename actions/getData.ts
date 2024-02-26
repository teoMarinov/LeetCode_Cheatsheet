import { db } from "@/lib/db";
import { auth } from "@/auth";
import { EntryType } from "@/app/types";

async function getData(): Promise<any> {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    const data = await db.entry.findMany({
      where: {
        userId,
      },
    });
    
    return data;
  } catch (err) {
    console.log("🚀🚀🚀🚀", err, "🚀🚀🚀🚀🚀Error newEntry");
  }
}
export default getData;
