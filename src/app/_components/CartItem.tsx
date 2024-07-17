'use client';

import { addItem, deleteItem, removeItem } from '@/Store/Slices/cartSlice';
import { AppDispatch } from '@/Store/store';
import { cartItemType } from '@/Utils/types';
import { formatNumberWithCommas } from '@/Utils/utils';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }: { item: cartItemType }) => {
  const dispatch: AppDispatch = useDispatch();

  function incrementQuantity() {
    const { quantity, ...cartItemWithoutQuantity } = item;
    dispatch(addItem(cartItemWithoutQuantity));
  }

  function decrementQuantity() {
    const { quantity, ...cartItemWithoutQuantity } = item;

    dispatch(removeItem(cartItemWithoutQuantity));
  }
  return (
    <div
      className="flex gap-6 p-4 border-b border-black border-opacity-10 min-h-[100px] "
      key={item?.id}
    >
      <img
        src={item?.image_url}
        alt={item?.name}
        className="md:w-[60px] md:h-[40px] w-[50px] h-[40px] rounded object-cover self-center"
      />
      <div className="flex flex-col justify-center">
        <div className="md:text-[15px] text-sm  font-light">
          {item?.name} {item?.serves && ` - Serves  ${item?.serves} `}
        </div>
        <div className="md:text-[15px] text-sm">
          Rs. {formatNumberWithCommas(item?.price ?? 0)}
        </div>

        <div className="flex gap-4 mt-2 ">
          <div className="flex gap-4 px-2 py-1 bg-black rounded-full md:gap-6 bg-opacity-5 w-fit">
            <button onClick={decrementQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="black"
                className="md:w-[10px] md:h-[10px] w-[8px] h-[8px]"
              >
                <path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"></path>
              </svg>
            </button>
            <span className="md:text-[12px] text-[10px]">{item?.quantity}</span>
            <button onClick={incrementQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[10px] md:h-[10px] w-[8px] h-[8px]"
                enableBackground="new 0 0 32 32"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                fill="black"
              >
                <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z"></path>
              </svg>
            </button>
          </div>

          <button
            className="md:text-[14px] text-[12px] underline"
            onClick={() => dispatch(deleteItem(item))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
