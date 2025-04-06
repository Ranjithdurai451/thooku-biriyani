import Link from "next/link";
import React from "react";

const page = () => {
  const dots = [
    { width: 8, height: 8, top: 10, left: 30 },
    { width: 10, height: 10, top: 120, left: 60 },
    { width: 6, height: 6, top: 30, left: 100 },
    { width: 18, height: 18, top: 300, left: 300 },
    { width: 12, height: 12, top: 70, left: 70 },
    { width: 18, height: 18, top: 300, left: 30 },
    { width: 16, height: 16, top: 220, left: 10 },
    { width: 10, height: 10, top: 140, left: 180 },
    { width: 8, height: 8, top: 260, left: 350 },
    { width: 12, height: 12, top: 180, left: 420 },
    { width: 10, height: 10, top: 50, left: 160 },
    { width: 16, height: 16, top: 280, left: 490 },
    { width: 8, height: 8, top: 110, left: 400 },
    { width: 6, height: 6, top: 40, left: 220 },
    { width: 10, height: 10, top: 190, left: 320 },
    { width: 14, height: 14, top: 340, left: 200 },
    { width: 6, height: 6, top: 30, left: 450 },
    { width: 8, height: 8, top: 60, left: 300 },
    { width: 10, height: 10, top: 140, left: 250 },
    { width: 12, height: 12, top: 70, left: 400 },
    { width: 8, height: 8, top: 160, left: 340 },
    { width: 16, height: 16, top: 280, left: 370 },
    { width: 10, height: 10, top: 200, left: 180 },
    { width: 8, height: 8, top: 130, left: 450 },
    { width: 16, height: 16, top: 60, left: 270 },
    { width: 10, height: 10, top: 90, left: 220 },
    { width: 8, height: 8, top: 20, left: 150 },
    { width: 6, height: 6, top: 170, left: 200 },
    { width: 10, height: 10, top: 220, left: 420 },
    { width: 18, height: 18, top: 80, left: 240 },
    { width: 16, height: 16, top: 160, left: 100 },
    { width: 10, height: 10, top: 200, left: 80 },
    { width: 14, height: 14, top: 250, left: 100 },
    { width: 18, height: 18, top: 10, left: 340 },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white bg-opacity-95 flex-col">
      <div className="p-3 flex justify-center items-center w-[500px] h-[400px] relative">
        <div className="w-[180px] h-[180px] rounded-full flex justify-center items-center bg-customGreen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-[120px] h-[120px] text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        {dots.map((dot, index) => (
          <div
            key={index}
            className="bg-customGreen rounded-full absolute"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.width,
              height: dot.height,
            }}
          ></div>
        ))}
      </div>
      <div className="flex gap-6 flex-col sm:w-[600px] w-[95%]">
        <h1 className="text-4xl font-extrabold text-black text-center">
          Thank you for your order!
        </h1>
        <p className="text-black text-center">
          Your delicious Thooku Biriyani is being prepared with care and will be
          on its way soon. We appreciate your trust in us to serve you the best!
        </p>

        <div className="flex gap-4 items-center text-black w-full justify-center">
          <Link
            href="/account"
            className="border border-black px-8 py-3 rounded font-semibold border-opacity-30 hover:bg-black  hover:bg-opacity-5 duration-300"
          >
            View Orders
          </Link>
          <Link
            href={"/menu"}
            className=" px-8 py-3 rounded font-semibold bg-customGreen text-white hover:bg-green-600 duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
