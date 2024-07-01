'use client';
import { RootState } from '@/Store/store';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import MenuItem from './_components/MenuItem';

const Menu = () => {
  const menuItems = useSelector((state: RootState) => state.menu.menuItems);
  const [selectedCategory, setSelectedCategory] = useState('combo');

  return (
    <>
      <section className="flex flex-col w-full gap-5 px-5 py-10 overflow-x-hidden overflow-y-auto text-white bg-black pt-[85px] sm:py-15 min-h-dvh">
        <h1 className="md:text-3xl text-2xl font-[900] text-center underline text-customGreen underline-offset-8">
          ThooKu Biriyani Menu
        </h1>
        <div className="flex justify-center gap-5 uppercase">
          <button
            className={`px-4 py-2  rounded-full border-customGreen md:text-[16px] text-[14px]  ${
              selectedCategory === 'combo'
                ? 'border-2  border-solid text-customGreen'
                : ''
            }`}
            onClick={() => setSelectedCategory('combo')}
          >
            Combo&apos;s
          </button>
          <button
            className={`px-4 py-2  rounded-full border-customGreen md:text-[16px] text-[14px]  ${
              selectedCategory === 'add-on'
                ? ' border-2  border-solid text-customGreen'
                : ''
            }`}
            onClick={() => setSelectedCategory('add-on')}
          >
            Add On's
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems &&
            menuItems
              .filter((item) => item.category === selectedCategory)
              .sort((a, b) => {
                return (
                  parseFloat(String(b?.price).replace(/,/g, '')) -
                  parseFloat(String(a?.price).replace(/,/g, ''))
                );
              })

              .map((item) => <MenuItem item={item} key={item?.id} />)}
        </div>
      </section>
    </>
  );
};

export default Menu;
