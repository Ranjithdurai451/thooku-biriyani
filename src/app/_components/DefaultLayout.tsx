'use client';
import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';
import ReduxProvider from '@/Store/ReduxProvider';
import CartModal from './CartModal';
import { SideBar } from './SideBar';
import InitialLoader from './InnitialLoader';

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
    '/ordersuccess',
  ].includes(pathname);

  return (
    <ReduxProvider>
      <InitialLoader />
      {shouldShowLayoutComponents && <Header />}
      {children}

      {shouldShowLayoutComponents && <Footer />}
      {shouldShowLayoutComponents && <SideBar />}
    </ReduxProvider>
  );
};

export default DefaultLayout;
