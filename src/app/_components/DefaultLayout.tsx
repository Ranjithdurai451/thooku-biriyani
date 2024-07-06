'use client';
import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';
import ReduxProvider from '@/Store/ReduxProvider';
import CartModal from './CartModal';
import { SideBar } from './SideBar';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const shouldShowLayoutComponents = ![
    '/dashboard',
    '/checkout',
    '/auth/login',
    '/auth/signup',
    '/dashboard/orders',
    '/dashboard/customers',
    '/dashboard/menus',
  ].includes(pathname);

  return (
    <ReduxProvider>
      {shouldShowLayoutComponents && <Header />}
      {children}

      {shouldShowLayoutComponents && <Footer />}
      {shouldShowLayoutComponents && <SideBar />}
      {shouldShowLayoutComponents && <CartModal />}
    </ReduxProvider>
  );
};

export default DefaultLayout;
