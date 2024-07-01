'use client';

import { toggleCartModal } from '@/Store/Slices/cartSlice';
import { AppDispatch, RootState } from '@/Store/store';
import { formatNumberWithCommas } from '@/Utils/utils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useRouter } from 'next/navigation';

const CartModal = () => {
  const navigate = useRouter().push;
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (cart.isCartModalOpen) {
      document.querySelector('html')?.classList.add('no-scroll');
    } else {
      document.querySelector('html')?.classList.remove('no-scroll');
    }
  }, [cart.isCartModalOpen]);

  function goToCart() {
    dispatch(toggleCartModal());
    navigate('/cart');
  }
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[1] overlay bg-black bg-opacity-50  w-dvw h-dvh ${
          cart.isCartModalOpen ? 'active' : ''
        }`}
      ></div>
      <div
        className={` z-[4] flex flex-col h-full bg-white md:w-[500px] w-dvw fixed  top-0 cart  right-0 ${
          cart.isCartModalOpen ? 'active' : ''
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-black border-opacity-20 ">
          <h1 className="text-xl">Shopping Cart</h1>
          <button onClick={() => dispatch(toggleCartModal())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col flex-grow overflow-y-scroll custom">
          {cart.cartItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        <div className="flex flex-col  min-h-[150px] border-black border-opacity-20 border-t">
          <div className="flex flex-col gap-2 p-3 border-b border-black border-opacity-20">
            <div className="flex items-center justify-between">
              <div>Subtotal</div>
              <div>Rs. {formatNumberWithCommas(cart.totalAmount)}</div>
            </div>
            <div className="font-light">
              Tax included and shipping calculated at checkout
            </div>
          </div>
          <div className="flex items-center justify-center flex-grow px-4">
            <button
              onClick={goToCart}
              className="w-full py-2 text-center duration-100 border border-black border-solid rounded-full hover:text-customGreen hover:border-customGreen"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
