import React from 'react';
import Image from 'next/image';
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full h-dvh lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center h-full py-12 bg-black ">
        {children}
      </div>
      <div className="hidden bg-muted lg:block ">
        <Image
          src="/testimonialBG.jpg"
          className="h-full w-full "
          alt=""
          width={500}
          height={450}
          quality={25}
        />
      </div>
    </div>
  );
};

export default layout;
