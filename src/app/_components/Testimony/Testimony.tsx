import React from 'react';
import { TestimonyItem } from './TestimonyItem';

type UserData = {
  username: string;
  date: string;
};

type DataItem = {
  id: number;
  feedback: string;
  user: UserData[];
  isShowOnMobile: boolean;
};

export const Testimony: React.FC = () => {
  const data: DataItem[] = [
    {
      id: 1,
      isShowOnMobile: true,
      feedback:
        ' “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”',
      user: [
        {
          username: 'vimal',
          date: 'bought month ago',
        },
      ],
    },
    {
      id: 2,
      isShowOnMobile: true,

      feedback:
        ' “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”',
      user: [
        {
          username: 'vimal',
          date: 'bought month ago',
        },
      ],
    },
    {
      id: 3,
      isShowOnMobile: true,

      feedback:
        ' “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”',
      user: [
        {
          username: 'vimal',
          date: 'bought month ago',
        },
      ],
    },
    {
      id: 4,
      isShowOnMobile: false,

      feedback:
        ' “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”',
      user: [
        {
          username: 'vimal',
          date: 'bought month ago',
        },
      ],
    },
    {
      id: 5,
      isShowOnMobile: false,

      feedback:
        ' “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”',
      user: [
        {
          username: 'vimal',
          date: 'bought month ago',
        },
      ],
    },
  ];
  return (
    <section
      // style={{
      //   backgroundImage: 'url(testimonialBG.jpg)',
      //   height: '100%',
      //   width: '100%',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      // }}
      className="flex flex-col justify-around bg-black"
    >
      <div className="text-center p-[40px]">
        <p className="md:text-[35px] text-[30px] text-customGreen font-bold leading-none">
          Testimony
        </p>
        <p className="md:text-[35px] text-[30px] leading-none text-white">
          what our customer says
        </p>
        <p className="p-[20px] md:text-[20px] text-[15px] font-semibold text-white">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-start md:items-end md:[&>div:nth-child(odd)]:min-h-[300px] [&>div:nth-child(even)]:bg-[#009432] md:[&>div:nth-child(even)]:min-h-[350px] ">
        {data.map((item) => (
          <TestimonyItem key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
