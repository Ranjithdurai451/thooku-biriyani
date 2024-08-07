'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@radix-ui/react-dropdown-menu';

import Link from 'next/link';
import { Input } from 'postcss';

import React from 'react';

const LoginModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-lg border border-white border-opacity-20 max-w-[95%] flex flex-col gap-5 p-6">
        <DialogTitle className=" text-customGreen sm:text-2xl">
          Welcome Back, Food Lover!
        </DialogTitle>
        <DialogDescription className=" sm:text-md">
          Log in to access your favorite dishes, track your orders, and enjoy
          personalized recommendations.
        </DialogDescription>

        <Link
          href={'/auth/login'}
          className="w-full text-center px-4 py-2 rounded-lg disabled:cursor-not-allowed disabled:opacity-45 bg-customGreen text-white hover:bg-green-700 duration-200"
        >
          Login
        </Link>
        <div className=" text-md text-center">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="underline text-customGreen">
            Sign up
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
