import { connectDb } from "./configs/connectDb";

export async function middleware() {
  return;
}

export const config = {
  matcher: "/api/:path*",
};
