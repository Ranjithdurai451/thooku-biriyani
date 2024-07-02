'use client';
import React, { useEffect } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';
import ReduxProvider from '@/Store/ReduxProvider';
import CartModal from './CartModal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Store/store';
import { useRouter } from 'next/navigation';
import { setRoutingLoader } from '@/Store/Slices/LoadersSlice';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  //   const dispatch = useDispatch<AppDispatch>();

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
