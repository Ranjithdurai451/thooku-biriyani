import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full h-dvh lg:grid lg:grid-cols-2 relative">
      <div className=" absolute top-0 left-0 p-8 md:p-10">
        <Link
          href="/"
          className="flex flex-col items-center font-[700] leading-none"
        >
          <span className="text-[18px] text-customGreen md:text-[22px]">
            THOOKU
          </span>
          <span className="text-[16px] text-white md:text-[18px]">BIRYANI</span>
        </Link>
      </div>
      <div className="flex items-center justify-center h-full py-12 bg-black ">
        {children}
      </div>
      <div className="hidden  lg:block bg-black ">
        {/* <Image
          src=""
          className="h-full w-full object-cover "
          alt=""
          width={500}
          height={450}
          quality={25}
        /> */}
      </div>
    </div>
  );
};

export default layout;
