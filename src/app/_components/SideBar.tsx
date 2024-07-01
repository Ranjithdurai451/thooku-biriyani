'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'home',
    icon: 'home_icon.svg',
    route: '/',
    isEnd: true,
  },
  {
    name: 'menu',
    icon: 'menu_icon.svg',
    route: '/menu',
    isEnd: false,
  },
  // {
  //   name: 'cart',
  //   icon: 'mobile_cart.svg',
  //   CartModelBtn: true,
  //   route: '/cart',
  //   isEnd: false,
  // },
  // {
  //   name: 'account',
  //   icon: 'user_icon.svg',
  //   route: '/account',
  //   isEnd: false,
  // },
];

export function SideBar() {
  const path = usePathname();
  return (
    <div className="fixed bg-black  sm:bg-transparent py-4 px-6 rounded-full bottom-[20px] md:py-0  flex sm:right-[20px] sm:bottom-[30px] justify-center left-[50%] translate-x-[-50%] sm:left-auto  sm:justify-start sm:translate-x-0  sm:w-auto sm:flex-col gap-6 z-[3]">
      {navLinks.map((link, index) => {
        return (
          <Link
            href={link.route}
            // className={({ isActive }) => (isActive ? 'active' : '')}
            className={`${path === link.route ? 'active' : ''}`}
            key={index}
          >
            <img
              className={`min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]  rounded-full bg-cover bg-customGreen border  border-customGreen border-solid border-spacing-[50px] p-[5px] hover:scale-125 duration-300`}
              src={link.icon}
              alt=""
            />
          </Link>
        );
      })}
    </div>
  );
}
