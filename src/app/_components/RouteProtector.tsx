'use client';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';

type PropType = {
  children: React.ReactNode;
  isAuth: boolean;
  redirectUrl: string;
};

const RouteProtector = ({ children, isAuth, redirectUrl }: PropType) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (isAuth && !user.isAuthenticated) {
        console.log('User is not authenticated, redirecting...', user);
        router.replace(redirectUrl);
      } else if (!isAuth && user.isAuthenticated) {
        console.log('User is authenticated, redirecting...', user);
        router.replace(redirectUrl);
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [isAuth, user.isAuthenticated, redirectUrl, router, pathname]); // Add pathname to dependencies

  if (isLoading) {
    return (
      <div className="h-dvh w-full bg-black flex justify-center items-center fixed inset-0 z-10">
        <div className="text-white text-xlss">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RouteProtector;
