'use client';

import { setCart, toggleCartModal } from '@/Store/Slices/cartSlice';
import { AppDispatch, RootState } from '@/Store/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findUser } from '../../../backend/Actions/actions';
import { clearUser, setUserInfo } from '@/Store/Slices/userSlice';
import { account, appwriteConfig, databases } from '../../../backend/config';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (cart.cartItems.length == 0) return;
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [cart.totalAmount, cart.cartItems.length]);

  useEffect(() => {
    async function fetchOrders() {
      const orders = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.orderCollectionId
      );
    }

    fetchOrders();
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch(setCart(JSON.parse(storedCart)));
    }
  }, []);

  useEffect(() => {
    if (cart.cartItems.length == 0) return;
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // useEffect(() => {
  //   let prevscroll = 0;
  //   const header = document.querySelector('.header') as HTMLElement;
  //   const handleScroll = () => {
  //     let currentscroll = window.pageYOffset;
  //     if (currentscroll > prevscroll) {
  //       header.classList.add('scrollactive');
  //     } else {
  //       header.classList.remove('scrollactive');
  //     }
  //     prevscroll = currentscroll;
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <header
        className={`w-[100dvw] header flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-[3] backdrop-blur-[2px] md:px-12 bg-[rgba(0,0,0,0.05)]`}
      >
        <Link
          href="/"
          className="flex flex-col items-center font-[700] leading-none"
        >
          <span className="text-[18px] text-customGreen md:text-[22px]">
            THOOKU
          </span>
          <span className="text-[16px] text-white md:text-[18px]">BIRYANI</span>
        </Link>

        <button
          className={`relative ${animate ? 'bump' : ''}`}
          onClick={() => {
            if (pathname == '/cart') return;
            dispatch(toggleCartModal());
          }}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10 fill-white"
          >
            <defs>
              <style>{'.cls-1{fill:none;}'}</style>
            </defs>
            <title />
            <g data-name="Layer 2" id="Layer_2">
              <path d="M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z" />
              <path d="M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z" />
            </g>
            <g id="frame">
              <rect className="cls-1" height={32} width={32} />
            </g>
          </svg>

          <span className="absolute top-[-15px] right-[-10px] md:top-[-15px] md:right-[-15px] text-sm flex items-center justify-center md:text-base md:w-[30px] md:h-[30px] h-[23px] w-[23px] text-white rounded-full bg-customGreen">
            {cart.totalItems}
          </span>
        </button>
      </header>
    </>
  );
};

export default Header;
