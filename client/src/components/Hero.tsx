'use client';
import { RiArrowRightLine } from "react-icons/ri";
import hero from "../../public/images/hero.png"
import heroboy from "../../public/images/hero-boy.png"
import herogirl from "../../public/images/hero-girl.png"
import avatar from "../../public/images/avatar.png"
import hearts from "../../public/images/hearts.png"
import Image from "next/image";

export default function Hero(){
    return(
    <section className="relative lg:mt-36 mt-28 lg:h-[90vh] px-2 lg:px-0 mb-14 lg:mb-0" >
<div className="flex  flex-col justify-center items-center">
  <div className="flex flex-col justify-center items-center w-[90%]">
    <h1 className="font-semibold text-[#353535] text-center xl:text-[75px] lg:text-[60px] text-[24px] font-roboto">Your Carrer May Be Behind You</h1>
    <h2 className="font-semibold text-[#353535] text-center xl:text-[60px] lg:text-[40px] text-[24px] mt-5 lg:mt-0 font-roboto">Your Best Days are Ahead of You</h2>
   <div className="w-full flex justify-center items-center">
   <p className="text-center xl:w-1/2 lg:w-[80%] w-[98%]  text-[#353535CC] leading-loose font-sans xl:text-[24px] lg:text-[20px] text-[18px]  pt-10">
    Join a vibrant community of active, impactful, & like-minded post  career individuals exploring new opportunities, building new connections, & pursuing new interests.
    </p>
   </div>
   
  </div>
  <div className=" pt-16">
    <button className="flex lg:py-6 py-3 lg:text-2xl text-xl lg:px-9 px-5 font-mulish font-bold bg-[#C9A74E] rounded-full justify-center items-center gap-5">
      Join Aprisio
      <span className="text-white bg-[#A48D4A] rounded-full p-1"> 
      <RiArrowRightLine className="w-6 h-6" />
      </span>
    </button>
  </div>
</div>
<div className="absolute lg:right-[2%] lg:top-[10%] top-[55%] right-3">
  <Image src={hearts} alt="hearts" className="lg:h-32 h-28 lg:w-[86px] w-[58px]"/>
</div>
<div className="absolute lg:block hidden left-[6%] top-[16%] ">
  <Image src={heroboy} alt="hero2" className="h-28 w-[76px]"/>
</div>
<div className="absolute lg:block hidden xl:left-[20%] xl:top-[40%] lg:top-[37%] lg:left-[20%]">
  <Image src={herogirl} alt="hero3" className="h-32 w-[86px]"/>
</div>
<div className="absolute   -z-10  hidden lg:block right-0 bottom-0">
  <div className=" flex justify-end">
<Image src={hero} alt="hero" className="lg:h-[80%] lg:w-[80%]  xl:h-full xl:w-full" />
  </div>
</div>
<div className="lg:absolute lg:left-16 mt-16 lg:mt-0 lg:bottom-20 flex lg:flex-row flex-col items-center">
<Image src={avatar} alt="" className="xl:h-24 xl:w-80 lg:w-60 lg:h-20  w-36 h-12 "/>
<div className="flex mt-5 lg:mt-0  justify-center items-center">
<h1 className="font-bold text-[#B9932E]  font-lato xl:text-6xl lg:text-4xl text-3xl  px-4">
  2M
</h1>
<p className="text-[#353535CC] xl:text-3xl lg:text-2xl text-xl font-sans">
Users are in the Aprisio 
</p>
</div>
</div>
</section>) 
}