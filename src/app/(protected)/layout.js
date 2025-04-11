"use client";

import Loader from "@/components/global/Loader";
import { useGetProfileQuery } from "@/features/auth/authApi";
import { setUser } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProtectedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isSuccess, IsLoading, isError } = useGetProfileQuery();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (data?.user && isSuccess) {
      dispatch(setUser(data?.user));
    }

    if (isError && !isAuthenticated) {
      router.push("/login");
    }
  }, [
    data,
    isSuccess,
    IsLoading,
    router,
    user,
    isError,
    dispatch,
    isAuthenticated,
  ]);

  console.log("user", user);

  if (IsLoading || (!isAuthenticated && !isError)) return <Loader />;
  if (isError && !isAuthenticated) return null;

  return <div>{children}</div>;
};

export default ProtectedLayout;
