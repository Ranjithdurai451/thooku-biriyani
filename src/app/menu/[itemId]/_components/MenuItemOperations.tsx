'use client';
import { addItem } from '@/Store/Slices/cartSlice';
import { AppDispatch, RootState } from '@/Store/store';
import { MenuItemType } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatNumberWithCommas } from '@/lib/utils';
const MenuItemOperations = ({ item }: { item: MenuItemType }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch: AppDispatch = useDispatch();

  function decrementQuantity() {
    setQuantity((quantity) => {
      if (quantity > 1) {
        return quantity - 1;
      }
      return quantity;
    });
  }

  function addToCart() {
    dispatch(
      addItem({
        ...item,
        quantity,
      })
    );
  }

  function incrementQuantity() {
    setQuantity((quantity) => {
      if (quantity < 10) {
        return quantity + 1;
      }
      return quantity;
    });
  }
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12">
      <img src={item?.image_url} alt="" className="rounded-xl md:w-[50%]" />

      <div className="flex flex-col gap-6 md:w-[50%] md:gap-8">
        <h1 className="text-xl font-bold md:text-2xl">
          {item?.name} {item?.serves && ` - Serves  ${item?.serves} `}
        </h1>
        <h1 className="text-xl font-light md:text-2xl">
          Rs. {formatNumberWithCommas(item?.price ?? 0)}
        </h1>

        <div className="flex gap-8">
          <button onClick={decrementQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="white"
              width="20"
              height="20"
            >
              <path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"></path>
            </svg>
          </button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              enableBackground="new 0 0 32 32"
              version="1.1"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              fill="white"
            >
              <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z"></path>
            </svg>
          </button>
        </div>
        <button
          type="button"
          onClick={addToCart}
          className="w-full py-3 font-bold duration-300 rounded-full bg-customGreen hover:opacity-80"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItemOperations;
