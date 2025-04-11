import { connectDb } from "@/configs/connectDb";
import { isAuthenticated } from "@/lib/isAuthenticated";
import { Auth } from "@/models/auth.model";
import { asyncHandler } from "@/utils/asynHanlder";
import { customError } from "@/utils/customError";
import { NextResponse } from "next/server";

export const GET = asyncHandler(async () => {
  await connectDb();
  const userGet = await isAuthenticated();

  const user = await Auth.findById(userGet?._id).select("-password");

  if (!user) throw new customError(404, "User not found");

  return NextResponse.json({
    success: true,
    message: "User profile fetched successfully",
    user,
  });
});
