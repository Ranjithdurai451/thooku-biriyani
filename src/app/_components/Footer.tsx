import { RootState } from "@/Store/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export const Footer = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div
      id="contact"
      className=" py-[40px] capitalize text-justify flex flex-col  md:flex-row md:justify-around bg-black px-5 pb-[80px] sm:pb-[40px]"
    >
      <div className="md:w-[300px]">
        <p className="md:text-[25px]  text-[20px] font-[400] text-customGreen">
          Sign up with OTP
        </p>
        <div className="">
          <p className="pt-[30px] pb-[15px] text-bg md:text-[16px] text-[14px]">
            "Discover the flavors of our authentic, mouthwatering biryani by
            signing up today!"
          </p>
          {!user.isAuthenticated && (
            <Link
              href="/auth/signup"
              className="px-20 py-2 border capitalize border-customGreen bg-customGreen text-white rounded-[3px] hover:text-customGreen hover:bg-transparent hover:transition-all hover:border "
            >
              sign up
            </Link>
          )}
        </div>
      </div>
      <div>
        <p className="pt-[25px] md:pt-0 md:text-[25px]  text-[20px] font-[400] text-customGreen">
          support links
        </p>
        <div className="py-[25px] flex flex-col [&>a]:text-bg md:text-[16px] text-[14px] ">
          <a href="" className="py-[5px] hover:text-customGreen">
            privacy policy
          </a>
          <a href="" className="py-[5px] hover:text-customGreen">
            cancellation & refund
          </a>
          <a href="" className="py-[5px] hover:text-customGreen">
            terms & conditions
          </a>
          <a href="" className="py-[5px] hover:text-customGreen">
            shipping & delivery
          </a>
        </div>
      </div>
      <div>
        <p className="text-[25px] font-[400] text-customGreen">contact</p>
        <div className="pt-[25px] flex flex-col md:w-[300px] [&>p]:py-[5px] [&>*]:text-bg ">
          <p className="">
            <span className="mr-1 ">chennai:</span>Cloud Kitchen Opp to
            koyambedu bus stand, jai nagar, 2nd main road, arumbakkam
          </p>
          <p>
            Email:
            <span>
              <a
                href="mailto:thookubiriyani@gmail.com"
                className="ml-1 hover:text-customGreen"
              >
                thookubiriyani@gmail.com
              </a>
            </span>
          </p>

          <p>
            Mobile:
            <span>
              <a href="" className="py-[5px] ml-1 hover:text-customGreen">
                +91 73392 20695
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center pt-[10px] gap-3 [&>a>img]:cursor-pointer [&>a>img]:w-[32px] [&>a>img]:h-[32px] [&>a>img]:transition-all [&>a>img]:duration-500 [&>a>img]:rounded-lg">
          <a href="https://www.instagram.com/thooku.biriyani?igsh=cGJ2cGoxbm1jdTB4">
            <img src="instagram_icon.svg" alt="" />
          </a>
          <a href="https://wa.me/917339220695">
            <img src="whatsapp_icon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
