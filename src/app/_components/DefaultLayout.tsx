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
  return (
    <ReduxProvider>
      {pathname != '/checkout' && <Header />}
      {children}
      {pathname != '/checkout' && <Footer />}
      {pathname != '/checkout' && <SideBar />}
      {pathname != '/checkout' && <CartModal />}
    </ReduxProvider>
  );
};

export default DefaultLayout;
