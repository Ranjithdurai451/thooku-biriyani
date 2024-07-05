"use client";
import { MenuItemType } from "@/Utils/types";
import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";

const CategorySelector = ({ menuItems }: { menuItems: MenuItemType[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("combo");

  return (
    <>
      <div className="flex justify-center gap-5 uppercase">
        <button
          className={`px-4 py-2  rounded-full border-customGreen md:text-[16px] text-[14px]   ${
            selectedCategory === "combo"
              ? "border-2  border-solid text-customGreen"
              : ""
          }`}
          onClick={() => setSelectedCategory("combo")}
        >
          Combo&apos;s
        </button>
        <button
          className={`px-4 py-2  rounded-full border-customGreen md:text-[16px] text-[14px]  ${
            selectedCategory === "add-on"
              ? " border-2  border-solid text-customGreen"
              : ""
          }`}
          onClick={() => setSelectedCategory("add-on")}
        >
          Add On&apos; s
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 xl:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 slide-in">
        {menuItems &&
          menuItems
            .filter((item) => item.category === selectedCategory)
            .sort((a, b) => {
              return (
                parseFloat(String(b?.price).replace(/,/g, "")) -
                parseFloat(String(a?.price).replace(/,/g, ""))
              );
            })

            .map((item) => <MenuItem item={item} key={item?.id} />)}
      </div>
    </>
  );
};

export default CategorySelector;
