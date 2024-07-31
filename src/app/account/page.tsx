'use client';
import { Button } from '@/components/ui/button';
import { clearUser } from '@/Store/Slices/userSlice';
import { AppDispatch, RootState } from '@/Store/store';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../../backend/Actions/actions';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser, MoreHorizontal, MoreVertical } from 'lucide-react';
import { account } from '../../../backend/config';

const page = () => {
  const user = useSelector((state: RootState) => state.user);

  const router = useRouter();
  // useEffect(() => {
  //   console.log('userInfo', user);
  //   if (!user.isAuthenticated) {
  //     router.push('/auth/login');
  //   }
  // }, []);
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  async function handleLogout() {
    setLoading(true);
    dispatch(clearUser());
    try {
      await account.deleteSession('current');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  if (!user.isAuthenticated) {
    return (
      <div className="h-dvh w-full bg-black flex justify-center items-center">
        <Button onClick={() => router.push('/auth/login')}>Login</Button>
      </div>
    );
  }

  return (
    <div className="h-dvh w-full flex  pt-[100px] px-[30px] items-center bg-black ">
      <Card className="p-[20px] rounded-xl h-fit flex flex-col gap-4 items-center relative   ">
        <div className=" absolute right-4 top-4 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Toggle account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Update Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Image
          src={user.userInfo.profileImg}
          width={100}
          height={100}
          alt={user.userInfo.username}
          className="rounded-full"
        />

        <div className="border  py-2 px-4 flex flex-col  border-opacity-40 border-white rounded-lg w-full bg-black ">
          <p className="text-muted-foreground text-sm">Username</p>
          <p>{user.userInfo.username}</p>
        </div>
        <div className="border  p-2 px-4 flex flex-col  border-opacity-40 border-white rounded-lg w-full bg-black">
          <p className="text-muted-foreground text-sm">Email</p>
          <p>{user.userInfo.email}</p>
        </div>
      </Card>
    </div>
  );
};

export default page;
