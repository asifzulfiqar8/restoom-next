import { connectDb } from "@/configs/connectDb";
import { NextResponse } from "next/server";

export async function GET(res) {
  await connectDb();
  return NextResponse.json({ success: true, message: "Hello from next js" });
}
