// app/api/download-emails/route.js (App Router)
import { db } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const snapshot = await db.collection("notifications").get();
      const emails = snapshot.docs.map(doc => doc.data().email);
  
      const csv = "email\n" + emails.join("\n");
  
      return new Response(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": "attachment; filename=emails.csv",
        },
      });
    } catch (err) {
      return new Response("Error generating CSV", { status: 500 });
    }
  }
  
