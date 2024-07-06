'use client';
import { addItem, deleteItem, removeItem } from '@/Store/Slices/cartSlice';
import { AppDispatch, RootState } from '@/Store/store';
import { cartItemType } from '@/Utils/types';
import { formatNumberWithCommas } from '@/Utils/utils';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const navigate = useRouter();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();
  function incrementQuantity(item: cartItemType) {
    const { quantity, ...cartItemWithoutQuantity } = item;
    dispatch(addItem(cartItemWithoutQuantity));
  }

  function decrementQuantity(item: cartItemType) {
    const { quantity, ...cartItemWithoutQuantity } = item;

    dispatch(removeItem(cartItemWithoutQuantity));
  }
  return (
    <>
      <div className="text-white bg-black h-dvh w-dvw">
        <div className="h-[20dvh] bg-cover bg-center flex justify-center items-center  bg-[url('https://sahibsbiryani.com/cdn/shop/files/about_bg_01.jpg?v=1712745115&width=1500')]">
          <h1 className="mt-16 text-2xl font-extrabold sm:mt-0 sm:text-5xl ">
            Shopping Cart
          </h1>
        </div>
        <div className="flex flex-col w-full md:flex-row h-[70dvh] ">
          {cart.cartItems.length > 0 && (
            <div className="hidden  lg:flex flex-col w-[75%] gap-6 py-4 px-8">
              <div className="flex justify-between min-h-[40px]">
                <h1 className="w-[45%] text-center py-4">Product</h1>

                <h1 className="w-[15%] text-center  py-4">Price</h1>

                <h1 className="w-[15%] text-center  py-4">Quantity</h1>

                <h1 className="w-[15%] text-center  py-4">Total</h1>
              </div>
              <div className="flex flex-col w-full gap-6 overflow-y-scroll custom">
                {cart.cartItems.map((item) => (
                  <div
                    className="flex items-center justify-between w-full gap-5 min-h-[80px] "
                    key={item?.id}
                  >
                    <div className="w-[45%] flex items-center gap-4 ">
                      <img
                        src={item?.image_url}
                        alt=""
                        className="w-[100px] h-[60px] object-cover rounded"
                      />

                      <div>
                        <h1 className="font-light">
                          {item?.name} - Serves {item?.serves}
                        </h1>

                        <button className="text-sm font-light underline underline-offset-4">
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="w-[15%] text-center">
                      {' '}
                      Rs. {formatNumberWithCommas(item?.price ?? 0)}
                    </div>
                    <div className="w-[15%] flex items-center justify-center gap-6 ">
                      <div className="flex items-center justify-center gap-5">
                        <button onClick={() => decrementQuantity(item)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 512 512"
                            version="1.1"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            fill="white"
                            width="10"
                            height="10"
                          >
                            <path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"></path>
                          </svg>
                        </button>
                        <span className="text-sm">{item?.quantity}</span>
                        <button onClick={() => incrementQuantity(item)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
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
                    </div>
                    <div className="w-[15%] text-center">
                      Rs.{' '}
                      {formatNumberWithCommas(
                        (item?.price ?? 0) * item?.quantity
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cart.cartItems.length === 0 && (
            <div className="flex items-center justify-center flex-grow lg:w-[75%]">
              <span className="text-3xl font-bold"> Your cart is empty !!</span>
            </div>
          )}

          {/* Mobile device view */}

          {cart.cartItems.length > 0 && (
            <div className="flex flex-col md:w-[60%] lg:hidden ">
              <h1 className="p-4 min-h-[50px] lg:hidden">Cart Summary</h1>

              <div className="flex-grow h-[40dvh] overflow-y-scroll custom">
                {cart.cartItems.map((item) => (
                  <div
                    className="flex w-full gap-4 p-4 border-opacity-10 min-h-[100px]"
                    key={item?.id}
                  >
                    <img
                      src={item?.image_url}
                      alt={item?.name}
                      className="w-[80px] h-[60px] rounded object-cover self-center"
                    />
                    <div className="flex flex-col font-light ">
                      <div className="text-sm ">
                        {item?.name}{' '}
                        {item?.serves && ` - Serves  ${item?.serves} `}
                      </div>
                      <div className="text-sm font-light">
                        Rs. {formatNumberWithCommas(item?.price ?? 0)}
                      </div>

                      <div className="flex gap-4 mt-2 ">
                        <div className="flex gap-6 px-2 py-1 bg-black rounded-full bg-opacity-5 w-fit">
                          <button onClick={() => decrementQuantity(item)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              enableBackground="new 0 0 512 512"
                              version="1.1"
                              viewBox="0 0 512 512"
                              xmlSpace="preserve"
                              fill="white"
                              width="10"
                              height="10"
                            >
                              <path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"></path>
                            </svg>
                          </button>
                          <span className="text-[12px]">{item?.quantity}</span>
                          <button onClick={() => incrementQuantity(item)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
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
                          className="text-sm font-light underline"
                          onClick={() => dispatch(deleteItem(item))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="md:w-[40%] lg:w-[25%] flex justify-center items-center px-5 w-full min-h-[30dvh] md:h-auto">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white bg-opacity-[0.08] ">
              <div className="flex items-center justify-between">
                <div> Subtotal</div>
                <div>Rs. {formatNumberWithCommas(cart.totalAmount)}</div>
              </div>
              <p>Tax included and shipping calculated at checkout</p>
              <button
                type="button"
                onClick={() => navigate.push('/checkout')}
                disabled={cart.cartItems.length === 0}
                className="w-full py-3 font-bold duration-300 rounded-full bg-customGreen hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
