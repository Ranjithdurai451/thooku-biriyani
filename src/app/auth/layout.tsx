import Link from 'next/link';
import EmblaCarousel from './_components/EmblaCarousel';
import RouteProtector from '../_components/RouteProtector';
// import EmblaCarousel from '../_components/EmblaCarousel';
export type slidesItemType = {
  imageUrl: string;
  title: string;
  desc: string;
};
const layout = ({ children }: { children: React.ReactNode }) => {
  const slides = [
    {
      imageUrl: '/chicken_combo.jpg',
      title: 'Spice Up Your Meal!',
      desc: 'Enjoy our Chicken Biriyani Family Combo with Chicken 65 and tasty sides. Perfect for family moments.',
    },
    {
      imageUrl: '/prawn_combo.jpg',
      title: 'Seafood Delight Awaits!',
      desc: 'Savor our Prawn Biriyani Family Combo. Juicy prawns, flavorful biriyani, and sides for a seafood treat.',
    },
    {
      imageUrl: '/add_ons.jpg',
      title: 'Extra Magic Add-Ons',
      desc: 'Enhance your meal with our add-ons. From Chicken 65 to Onion Raitha, these extras elevate your experience.',
    },
  ];

  const options = {
    loop: true,
  };
  return (
    <RouteProtector isAuth={false} redirectUrl={'/'}>
      <div className=" w-full h-dvh lg:grid lg:grid-cols-2 relative bg-black ">
        <div className=" absolute top-0 left-0 p-8 md:p-10 z-[1]">
          <Link
            href="/"
            className="flex flex-col items-center font-[700] leading-none"
          >
            <span className="text-[18px] text-customGreen md:text-[22px] test">
              THOOKU
            </span>
            <span className="text-[16px] text-white md:text-[18px]">
              BIRYANI
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center bg-black fixed inset-0 ">
          <div className="relative box">
            <EmblaCarousel slides={slides} options={options}></EmblaCarousel>

            <div className="absolute top-[50%] translate-y-[-50%] lg:left-[calc(50%+150px)] left-[50%] translate-x-[-50%] lg:translate-x-0     ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </RouteProtector>
  );
};

export default layout;
