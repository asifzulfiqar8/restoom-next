"use client";

import Loader from "@/components/global/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedLayout = ({ children }) => {
  const { user, token } = useSelector((state) => state.auth);
  const router = useRouter();
  console.log("user, token", user, token);
  useEffect(() => {
    if (!user || !token) {
      router.push("/login");
    }
  }, [user, token, router]);

  if (!user || !token) return <Loader />;
  return <div>{children}</div>;
};

export default ProtectedLayout;
