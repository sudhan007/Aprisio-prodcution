'use client';
import Image from "next/image"
import video from "../../public/images/video.png"
import hero from "../../public/images/Frame 144.png"
export default function About() {

    return (
        <section className="bg-[#6F7E5F]">
            <div className=" flex flex-col gap-16 lg:px-14 px-5 lg:pt-20 pt-6">
                <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between ">
                <div className="lg:w-1/2 w-full ">
                    <h1 className="font-roboto font-semibold xl:text-7xl lg:text-5xl text-2xl text-white">
                        About Aprisio
                    </h1>
                    <p className="font-roboto lg:text-4xl text-xl lg:pt-4 pt-5 text-white">
                        Post career Impact & Fulfilment
                    </p>
                </div>

                <div className="lg:w-1/2 w-full ">
                    <p className="text-white  xl:text-3xl lg:text-xl text-lg  font-sans">
                    Aprisio is a community of, for and by post career individuals whose careers may be behind them but their best days are ahead of them. This community seeks to explore new opportunities to stay productive, foster new, meaningful connections to stay connected, and pursue new interests to retain their zest for life. 
                    </p>
                </div>
                </div>
               <div>
                <div className="lg:w-full  xl:h-[614px] flex justify-center lg:h-[414px] h-[280px] rounded-3xl">
                <Image src={video} alt="hero"  className="lg:w-full md:block hidden md:w-5/6 w-full object-contain h-full"/>
                <Image src={hero} alt="hero"  className="lg:w-full md:hidden block md:w-5/6 w-full object-contain h-full"/>
                {/* <div>
                <video
                        className="w-full h-full object-cover rounded-2xl"
                        controls
                       
                        muted
                    >
                         <source src="/public/chvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}
                </div>
               </div>
            </div>
        </section>
    )
}