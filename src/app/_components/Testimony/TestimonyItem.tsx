import Image from 'next/image';

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
type TestimonyItemProps = {
  data: DataItem;
};
export const TestimonyItem: React.FC<TestimonyItemProps> = ({ data }) => (
  <div
    className={`flex flex-col justify-around gap-3 p-6 md:gap-5 md:p-8 bg-customGreen ${
      !data?.isShowOnMobile ? 'hidden sm:block' : ''
    }`}
  >
    <div className="text-justify  md:text-[16px] text-[14px]">
      {data.feedback}
    </div>
    <div className="flex gap-[15px] ">
      <Image
        src="/about.jpg"
        className=" rounded-full"
        alt=""
        width={32}
        height={32}
        quality={75} // Adjust the quality to balance between size and clarity
        placeholder="blur"
        blurDataURL="/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
      <div className="">
        <p className="md:text-[16px] text-[14px]">{data.user[0].username}</p>
        <p className=" text-black md:text-[12px] text-[10px]">
          {data.user[0].date}
        </p>
      </div>
    </div>
  </div>
);
