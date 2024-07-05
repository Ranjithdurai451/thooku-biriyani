"use client";
import { Button } from "@/components/ui/button";
import { clearUser } from "@/Store/Slices/userSlice";
import { AppDispatch, RootState } from "@/Store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../backend/Actions/actions";

const page = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  function handleLogout() {
    setLoading(true);
    dispatch(clearUser());
    logout();
    setLoading(false);
  }
  return (
    <div className="h-dvh w-full bg-black py-[100px] px-[50px] flex justify-center items-center flex-col  gap-5">
      {!user.isAuthenticated && (
        <Link className="text-customGreen" href="/auth/login">
          Login
        </Link>
      )}
      {user.isAuthenticated && (
        <Image
          src={user.userInfo.profileImg}
          width={50}
          height={50}
          className="rounded-full"
          alt={user.userInfo.username}
        />
      )}
      {user.isAuthenticated && (
        <h1 className="text-white text-3xl">Hello {user.userInfo.username},</h1>
      )}
      {user.isAuthenticated && (
        <Button onClick={handleLogout}>
          {loading ? "Logging out..." : "Logout"}
        </Button>
      )}
    </div>
  );
};

export default page;
