/* eslint-disable react/jsx-no-undef */
'use client';
import { RootState } from '@/Store/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useSelector } from 'react-redux';
import { formatNumberWithCommas } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { placeOrder } from '../../../backend/Actions/serverActions';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const Checkout = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuthenticated);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  if (!isAuth) {
    router.push('/auth/login');
  }

  const [errorMsg, setErrMsg] = useState('');

  const cart = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.user);
  const [orderSummaryActive, setOrderSummaryActive] = useState(false);

  const checkoutSchema = z.object({
    phoneNumber: z
      .string()
      .min(10, { message: 'Mobile phone number must be at least 10 digits' })
      .max(15, { message: 'Mobile phone number must be at most 15 digits' }),
    // country: z.string().optional(),
    firstName: z.string().nonempty({ message: 'First name is required' }),
    lastName: z.string().nonempty({ message: 'Last name is required' }),
    // company: z.string().optional(),
    address: z.string().nonempty({ message: 'Address is required' }),
    // apartment: z.string().optional(),
    city: z.string().nonempty({ message: 'City is required' }),
    // state: z.string().optional(),
    pinCode: z
      .string()
      .min(5, { message: 'PIN code must be at least 5 digits' })
      .max(6, { message: 'PIN code must be at most 6 digits' }),
    // phone: z
    //   .string()
    //   .min(10, { message: 'Phone number must be at least 10 digits' })
    //   .max(15, { message: 'Phone number must be at most 15 digits' }),
    // saveInfo: z.boolean().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      // saveInfo: true,
    },
  });

  async function checkoutHandler(data: z.infer<typeof checkoutSchema>) {
    setIsLoading(true);
    const res = await placeOrder({
      cart: cart,
      phoneNumber: Number(data.phoneNumber),
      address: data.address,
      userId: user.userInfo.id,
    });

    if (!res) {
      setIsLoading(false);
      setErrMsg('Could not place order');
      return;
    }

    router.push('/ordersucess');
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col w-full min-h-dvh text-black bg-white">
      <div className="flex items-baseline justify-between p-4 border-b border-black border-opacity-15">
        <Link href="/" className="ml-2 text-xl font-bold">
          {' '}
          Thooku Biriyani
        </Link>
        <Link className="mr-4" href="/cart">
          <Image src="mobile_cart.svg" alt="" width={25} height={25} />
        </Link>
      </div>
      <div className="relative flex flex-col lg:flex-row">
        <div className="flex items-center ljustify-center lg:justify-normal lg:items-start flex-col lg:w-[45%]  lg:px-8 bg-black bg-opacity-[0.07] border-b border-black border-opacity-15 lg:order-2">
          <div className="flex items-center justify-center w-full border-black lg:border-b lg:hidden border-opacity-15">
            <div className="max-w-[600px] w-full p-4">
              <div className="flex items-center justify-between w-full ">
                <button
                  onClick={() => setOrderSummaryActive((prev) => !prev)}
                  className="font-normal text-[#1773b0] flex gap-2 items-center "
                >
                  <p>Order Summary</p>
                  <div
                    className={` duration-300 ${
                      orderSummaryActive ? ' rotate-90' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      data-name="Layer 1"
                      viewBox="0 0 200 200"
                      fill="#1773b0"
                    >
                      <path d="M132.72 78.75l-56.5-56.5a9.67 9.67 0 00-14 0 9.67 9.67 0 000 14l56.5 56.5a9.67 9.67 0 010 14l-57 57a9.9 9.9 0 0014 14l56.5-56.5c12-12 12-31 .5-42.5z"></path>
                    </svg>
                  </div>
                </button>

                <div>&#8377; {formatNumberWithCommas(cart.totalAmount)}</div>
              </div>
            </div>
          </div>

          <div
            className={`lg:sticky ${
              orderSummaryActive ? 'h-[85dvh] lg:h-auto' : 'h-0 lg:h-auto'
            } w-full max-w-[600px]  top-0 flex flex-col gap-5 lg:py-6 overflow-hidden  transition-[height] duration-500 `}
          >
            <div className="flex flex-col  gap-5 h-[400px] overflow-scroll custom px-2 py-6">
              {cart.cartItems.map((item) => (
                <div
                  className="flex items-center justify-between"
                  key={item.id}
                >
                  <div className="flex items-center gap-5">
                    <div className="relative rounded-lg">
                      <Image
                        src={item?.image_url ?? ''}
                        alt=""
                        width={75}
                        height={55}
                      />
                      <span className="absolute top-[-15px] right-[-10px] py-0 px-2  text-white rounded-full bg-black">
                        {item?.quantity}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 text-sm font-light">
                      <p className="">{item?.name}</p>
                      {item?.serves && <p>Serves - {item?.serves}</p>}
                    </div>
                  </div>

                  <p className="text-sm">
                    &#8377;{formatNumberWithCommas(item?.price ?? 0)}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 px-4">
              <div className="flex items-center gap-4 ">
                <Input type="text" placeholder="Discount code"></Input>
                <Button>Apply</Button>
              </div>

              <div className="flex items-center justify-between ">
                <p className="font-light ">Subtotal</p>
                <p className="font-light ">₹12,000</p>
              </div>
              <div className="flex items-center justify-between ">
                <h1 className="text-xl">Total</h1>
                <div className="text-sm font-light">
                  INR <span className="text-xl font-semibold">₹ 12,000</span>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(checkoutHandler)}
          className="flex items-center justify-center lg:w-[55%]"
        >
          <div className="max-w-[600px] flex-grow md:bg-white bg-black bg-opacity-[0.07] flex flex-col gap-4 sm:gap-0 md:py-6 md:px-5">
            <div className="flex flex-col gap-4 p-4 bg-white border-t border-b border-black border-opacity-15 sm:border-none">
              <h2 className="text-xl">Contact</h2>
              <Input
                type="text"
                placeholder="  phone number"
                {...register('phoneNumber')}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4 p-4 bg-white border-t border-b border-black border-opacity-15 sm:border-none">
              <h2 className="text-xl ">Delivery</h2>
              {/* <div className="space-y-2">
                <Label htmlFor="country">Country/Region</Label>
                <Select {...register('country')}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="India" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-sm text-red-500">
                    {errors.country.message}
                  </p>
                )}
              </div> */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="First name"
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Last name"
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="company">Company (optional)</Label>
                <Input
                  id="company"
                  placeholder="Company (optional)"
                  {...register('company')}
                />
                {errors.company && (
                  <p className="text-sm text-red-500">
                    {errors.company.message}
                  </p>
                )}
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Address"
                  {...register('address')}
                />
                {errors.address && (
                  <p className="text-sm text-red-500">
                    {errors.address.message}
                  </p>
                )}
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="apartment">
                  Apartment, suite, etc. (optional)
                </Label>
                <Input
                  id="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  {...register('apartment')}
                />
                {errors.apartment && (
                  <p className="text-sm text-red-500">
                    {errors.apartment.message}
                  </p>
                )}
              </div> */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" {...register('city')} />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select {...register('state')}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Tamil Nadu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="andhra-pradesh">
                        Andhra Pradesh
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.state && (
                    <p className="text-sm text-red-500">
                      {errors.state.message}
                    </p>
                  )}
                </div> */}
                <div className="space-y-2">
                  <Label htmlFor="pin-code">PIN code</Label>
                  <Input
                    id="pin-code"
                    placeholder="PIN code"
                    {...register('pinCode')}
                  />
                  {errors.pinCode && (
                    <p className="text-sm text-red-500">
                      {errors.pinCode.message}
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Phone" {...register('phone')} />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div> */}
              {/* <div className="flex items-center space-x-2">
                <Checkbox id="save-info" {...register('saveInfo')} />
                <label htmlFor="save-info" className="text-sm font-medium">
                  Save this information for next time
                </label>
              </div> */}
            </div>

            <div className="flex flex-col gap-4 p-4 bg-white border-t border-b border-black lg:py-0 lg:gap-0 border-opacity-15 sm:border-none">
              <div className="flex items-center justify-between lg:hidden">
                <div className="text-xl ">
                  {' '}
                  Order summary {'(' + cart.totalItems + ')'}
                </div>
                {/* <button className="text-[#1773b0]">show</button> */}
              </div>
              <div className="flex items-center gap-4 lg:hidden">
                <Input type="text" placeholder="Discount code"></Input>
                <Button className="bg-[#1773b0] hover:bg-[#1773b0] text-white">
                  Apply
                </Button>
              </div>

              <div className="flex items-center justify-between lg:hidden">
                <p className="font-light ">Subtotal</p>
                <p className="font-light ">
                  ₹{formatNumberWithCommas(cart.totalAmount)}
                </p>
              </div>
              <div className="flex items-center justify-between lg:hidden">
                <h1 className="text-xl">Total</h1>
                <div className="text-sm font-light">
                  INR{' '}
                  <span className="text-xl font-semibold">
                    ₹{formatNumberWithCommas(cart.totalAmount)}
                  </span>
                </div>
              </div>

              <Button
                className="bg-[#1773b0] hover:bg-[#1773b0] text-white "
                size={'lg'}
              >
                {isLoading ? 'placing order...' : 'Place order'}
              </Button>

              <div className="pt-4 font-light border-t border-black border-opacity-15 sm:border-none">
                All rights reserved Thooku Biriyani
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
