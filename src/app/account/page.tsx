'use client';
import { Button } from '@/components/ui/button';
import { clearUser } from '@/Store/Slices/userSlice';
import { AppDispatch, RootState } from '@/Store/store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../backend/Actions/actions';
import { useRouter } from 'next/navigation';

const page = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();

  if (!user.isAuthenticated) router.push('/auth/login');
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  function handleLogout() {
    setLoading(true);
    dispatch(clearUser());
    logout();
    setLoading(false);
  }

  return (
    <div className="min-h-dvh w-full  bg-black px-[20px] pt-[90px] pb-[30px] md:px-[40px] flex  flex-col  gap-8 justify-center items-center"></div>
  );
};

export default page;
