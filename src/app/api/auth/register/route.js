import { NextResponse } from "next/server";

export async function GET(res) {
  return NextResponse.json({ success: true, message: "Hello from next js" });
}
