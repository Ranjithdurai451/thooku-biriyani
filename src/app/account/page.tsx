'use client';
import { RootState } from '@/Store/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const page = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="h-dvh w-dvw bg-black py-[100px] px-[50px] flex justify-center items-center ">
      {!user.isAuthenticated && (
        <Link className="text-customGreen" href="/auth/login">
          Login
        </Link>
      )}
      {user.isAuthenticated && (
        <h1 className="text-white text-3xl">Hello {user.userInfo.username},</h1>
      )}
    </div>
  );
};

export default page;
