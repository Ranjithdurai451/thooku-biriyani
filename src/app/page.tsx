'use client';
import { RootState } from '@/Store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AboutSection from './_components/AboutSection';
import CartModal from './_components/CartModal';
import EmblaCarousel from './_components/EmblaCarousel';
import MenuSection from './_components/MenuSection';
import { SideBar } from './_components/SideBar';
import { Testimony } from './_components/Testimony/Testimony';
import Link from 'next/link';

export default function Home() {
  const slides = [
    {
      imageUrl: '/chicken_combo.jpg',
      text: 'Spice Up Your Meal with Our Chicken Biriyani Combo!',
      desc: 'Indulge in our Chicken Thooku Biriyani Family Combo, featuring tender chicken biriyani, crispy Chicken 65, and an array of delightful sides. Perfect for creating unforgettable family moments.',
    },
    {
      imageUrl: '/prawn_combo.jpg',
      text: 'A Seafood Delight - Prawn Biriyani Combo Awaits You',
      desc: 'Treat your taste buds to our Prawn Thooku Biriyani Family Combo. Juicy prawns, flavorful biriyani, and delicious sides make this the perfect seafood indulgence for your family.',
    },
    {
      imageUrl: '/add_ons.jpg',
      text: 'Add a Little Extra Magic to Your Meal with Our Add-Ons',
      desc: 'Enhance your meal with our irresistible add-ons. From crispy Chicken 65 to creamy Onion Raitha, these extras will elevate your Thooku Biriyani experience to new heights.',
    },
  ];
  const about = [
    {
      title: 'About',
      subtitle: 'Thooku Biriyani',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim recusandae consequatur assumenda, ut officia dolorem fugiat sunt doloremque sint facere! Ratione recusandae reiciendis, aut in vitaeut quod ullam facilis libero non qui ipsam. Consequatur inciduntvoluptates enim quasi porro ad autem fugit nemo. Distinctio, nihilad? Aperiam officia expedita tenetur officiis commodi laboriosam velmolestias doloremque, eligendi enim reprehenderit soluta explicaboassumenda! Rem eveniet, quos at quam qui alias doloribus accusamuslaudantium minima magnam odit quod aliquid repudiandae cupiditatedolore error, quis voluptatum consequatur delectus quas, quaeratimpedit autem. Molestias nostrum consectetur nam amet quae doloresvoluptatum eius!',
    },
  ];

  return (
    <>
      {/* <div className='home w-full h-dvh bg-red-400'></div> */}
      <EmblaCarousel slides={slides} />
      <AboutSection about={about} />

      <MenuSection />
      <Testimony />
    </>
  );
}
