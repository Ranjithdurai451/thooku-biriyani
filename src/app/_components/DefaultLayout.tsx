'use client';
import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';
import ReduxProvider from '@/Store/ReduxProvider';
import CartModal from './CartModal';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <ReduxProvider>
      {pathname != '/checkout' && <Header />}
      {children}
      {pathname != '/checkout' && <Footer />}
      <CartModal />
    </ReduxProvider>
  );
};

export default DefaultLayout;
