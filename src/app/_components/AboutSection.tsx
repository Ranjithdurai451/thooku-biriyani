import Image from 'next/image';

type PropType = {
  title: string;
  subtitle: string;
  desc: string;
};

const AboutSection = ({ about }: { about: PropType[] }) => {
  return (
    <div
      id="about"
      className="px-[10px] py-[20px] flex flex-col md:flex-row bg-black "
    >
      <div className="relative flex items-center justify-center py-[30px] md:w-[50%] [&>img]:rounded-md">
        <Image
          className="absolute h-[100px] w-[150px] md:w-[250px] md:h-[250px] object-cover"
          style={{ top: 'calc(8px)', left: 'calc(0px)' }}
          src="/about.jpg"
          alt=""
          width={100}
          height={100}
        />
        <img
          src="/about.jpg"
          className=" w-[500px] h-[450px] object-cover"
          alt=""
          width={500}
          height={450}
        />
        <img
          className="absolute h-[150px] w-[150px] md:w-[200px] md:h-[200px] object-cover"
          style={{ bottom: 'calc(-5px)', right: 'calc(0px )' }}
          src="/about.jpg"
          alt=""
          width={150}
          height={150}
        />
      </div>
      <div className=" p-[20px] md:w-[50%] backdrop-blur ">
        <div className=" md:p-[50px] ">
          <span className="md:text-[40px] text-[30px] text-white font-bold">
            {about[0].title}
          </span>
          <div className="md:text-[40px] text-[30px] text-customGreen font-[500] leading-[50px] ">
            {about[0].subtitle}
          </div>
          <div className="md:text-[18px] text-[14px]  text-justify text-gray">
            {about[0].desc}
          </div>
          {/* <button className="mt-[10px] transition-all text-black border-[1px] border-customGreen font-bold bg-customGreen hover:bg-transparent hover:text-customGreen px-[60px] py-[8px] rounded-sm">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
