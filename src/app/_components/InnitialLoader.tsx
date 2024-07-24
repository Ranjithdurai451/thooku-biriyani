'use client';

import { setUserInfo, clearUser } from '@/Store/Slices/userSlice';
import { useEffect, useState, useTransition } from 'react';
import { findUser } from '../../../backend/Actions/actions';
import { account } from '../../../backend/config';
import { useDispatch } from 'react-redux';
import { delay } from '@/Utils/utils';

export default function InitialLoader() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  // const [isPending, startTransition] = useTransition();
  //   const body = document?.querySelector('body');
  // const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await account.get();

        const userInfo = await findUser({ email: user?.email });

        dispatch(
          setUserInfo({
            id: userInfo?.$id,
            username: userInfo?.username,
            email: userInfo?.email,
            profileImg: userInfo?.profileImg,
          })
        );
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        await delay(500);
        setShow(false);
        document
          ?.querySelector('body')
          ?.style.setProperty('position', 'static');
      }
    };

    fetchUserData();
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
