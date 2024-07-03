'use client';

import { useEffect, useState } from 'react';

export default function InitialLoader() {
  const [show, setShow] = useState(true);
  //   const body = document?.querySelector('body');
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      document?.querySelector('body')?.style.setProperty('position', 'static');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed left-0 right-0 z-[10] w-[100dvw] h-[100dvh] flex items-center justify-center bg-black gap-[5px] uppercase font-extrabold text-[30px]">
      {/* <div className="logo"></div> */}
      <p className="text-customGreen zoom-in">Thooku</p>
      <p className=" text-white zoom-in">Biryani</p>
    </div>
  );
}
