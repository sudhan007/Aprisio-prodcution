'use client';

import { RiArrowRightLine } from "react-icons/ri"
import joinBg from "../../public/images/join-bg.png"
import Image from "next/image"
import joinSmall from "../../public/images/JoinTab.png"
import joinTab from "../../public/images/JoinTab.png"
import Link from "next/link";
import retirement from "../../public/images/retirement.png"
import retirement_md from "../../public/images/retirement-md.png"
export default function Join(){

    return(
        <section className="relative w-full overflow-hidden">
             <div className="relative hidden lg:block  ">
        <Image src={joinBg} className="w-full h-[560px]" alt="Large Screen Image" />
      </div>

      {/* Medium Screen */}
      <div className="relative hidden md:block lg:hidden">
        <Image src={joinTab} className="w-full h-[780px]" alt="Medium Screen Image" />
      </div>

      {/* Small Screen */}
      <div className="relative block md:hidden">
        <Image src={joinSmall} className="w-full h-[680px]" alt="Small Screen Image" />
      </div>
      <div className="absolute bottom-0 h-full lg:flex items-end lg:right-0  hidden">
      <Image src={retirement} className="w-full  h-[90%]" alt="Screen Image" />
      </div>

      <div className="absolute  h-[70%] w-full md:flex items-center  justify-center bottom-0 hidden  lg:hidden">
      <Image src={retirement_md} className="w-full " alt="md Screen Image" />
      </div>
      <div className="absolute  h-[60%] w-full md:hidden items-center  justify-center bottom-0 flex  lg:hidden">
      <Image src={retirement_md} className="w-full " alt="md Screen Image" />
      </div>
      <div className=" text-white absolute lg:top-16 top-10 xl:left-20 lg:left-9 lg:px-10 px-4">
        <h1 className="font-roboto xl:text-5xl lg:text-3xl lg:w-[70%]  lg:leading-normal leading-relaxed lg:text-left text-center text-xl">
        Your post career life begins today. Take the first step towards a more productive, connected and impactful life.
        </h1>
      </div>
      <div className="absolute lg:top-[80%] md:top-64 top-72 xl:left-24 lg:left-14 w-full">
        <p className="text-[#FFFFFF] opacity-70 lg:text-left text-center  font-lato text-xl">Let’s join yourself to the community</p>
      </div>
            <div className="absolute inset-0 flex xl:top-36 lg:top-28 xl:left-24 lg:left-14 md:-top-[54%]  -top-64 items-center justify-center lg:justify-start">
              <Link href={"/join-community"}> 
        <span className="flex py-5 text-2xl pl-6 pr-4 font-mulish font-bold bg-[#F0B73F] rounded-full justify-center items-center gap-5">
          Join Community
          <span className="text-white bg-[#00000029] rounded-full p-1">
            <RiArrowRightLine className="w-6 h-6" />
          </span>
        </span>
      </Link>
      </div>
        </section>
    )
}
