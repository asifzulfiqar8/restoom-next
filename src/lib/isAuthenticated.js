import { getEnv } from "@/configs/config";
import { accessTokenOptions } from "@/configs/constants";
import { Auth } from "@/models/auth.model";
import { JWTService } from "@/services/auth/jwtService";
import { asyncHandler } from "@/utils/asynHanlder";
import { customError } from "@/utils/customError";
import { cookies } from "next/headers";

export const isAuthenticated = asyncHandler(async (req) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get(getEnv("ACCESS_TOKEN_NAME"));
  const refreshToken = cookieStore.get(getEnv("REFRESH_TOKEN_NAME"));

  if (!refreshToken) throw new customError(401, "Please Login First");

  if (!accessToken) {
    const decoded = await JWTService().verifyRefreshToken(refreshToken);
    if (!decoded) throw new customError(401, "Please Login First");

    const user = await Auth.findById(decoded._id);
    if (!user) throw new customError(401, "Please Login First");

    const newAccessToken = await JWTService().accessToken(user._id);
    if (!newAccessToken)
      throw new customError(400, "Error While Generating Access Token");

    cookieStore.set(
      getEnv("ACCESS_TOKEN_NAME"),
      accessToken,
      accessTokenOptions
    );

    req.user = user;
    return;
  }

  const decoded = await JWTService().verifyAccessToken(accessToken);
  if (!decoded) throw new customError(401, "Please Login First");

  const user = await Auth.findById(decoded._id);
  if (!user) throw new customError(401, "Please Login First");

  req.user = user;
  return;
});
