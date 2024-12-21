'use client';
import Image from "next/image";
import share from "../../public/images/sharing.png";
import group from "../../public/images/People.png";
import monitor from "../../public/images/monitor.png";
import job from "../../public/images/Briefcase.png";
import rect from "../../public/images/Rectangle.png"
import circle from "../../public/images/Ellipse.png"
import heart2 from "../../public/images/heart-2.png"
// import vector from "../../public/images/Vector.png"
export default function FAQ2() {
    return (
        <section className="bg-[#F2F5F6] lg:px-14 px-5 lg:pb-0 pb-12">
            <div className="absolute right-0">
                <Image src={heart2} className="h-12 w-14" alt="hearts" />
            </div>
            <div className="font-roboto lg:py-20 py-6 font-semibold lg:text-7xl text-2xl text-[#353535]">
                <h1>Why Aprisio?</h1>
            </div>
            {/* cards */}

            <div className="grid lg:grid-cols-3  lg:gap-20 gap-10 relative">
                <div className="flex lg:flex-col lg:gap-10 gap-5 items-start">
                    <div className="lg:h-28 rounded-full lg:w-28 bg-[#FFE4E0] h-14 w-14 flex items-center justify-center">
                    <Image src={share} className="lg:p-10 p-4" alt="sharing" />
                    </div>
                    <div className="flex flex-col gap-4 lg:pt-0 pt-3">
                        <h1 className="font-roboto font-semibold lg:text-4xl text-2xl text-[#353535]">
                            Internet-Based Groups
                        </h1>
                        <p className="font-sans lg:text-3xl text-xl text-[#353535CC]">
                        Connect with like-minded individuals over topics you love.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-col lg:gap-10 gap-5 items-start">
                    <div className="lg:h-28 rounded-full lg:w-28 bg-[#FFE7CE] h-14 w-14 flex items-center justify-center">
                    <Image src={monitor} className="lg:p-10 p-4" alt="sharing" />
                    </div>
                    <div className="flex flex-col gap-4 lg:pt-0 pt-3 lg:w-full w-3/4">
                        <h1 className="font-roboto font-semibold lg:text-4xl text-2xl text-[#353535]">
                        Virtual and Local Interest-Based Meetups
                        </h1>
                        <p className="font-sans lg:text-3xl text-xl text-[#353535CC]">
                        Network virtually and in-person with like-minded individuals who share your passion.
                        </p>
                    </div>
                </div>
{/* 
                <div className="">
                        <Image src={vector} className="" alt="sharing" />
                    </div> */}


                <div className="flex lg:flex-col lg:gap-10 gap-5 items-start">
                <div className="lg:h-28 rounded-full lg:w-28 bg-[#EBDEBB] h-14 w-14 flex items-center justify-center">
                        <Image src={group} className="lg:p-10 p-4" alt="sharing" />
                    </div>
                    <div className="flex flex-col gap-4 lg:pt-0 pt-3 lg:w-full w-3/4">
                        <h1 className="font-roboto font-semibold lg:text-4xl text-2xl text-[#353535]">
                        Supportive Community
                        </h1>
                        <p className="font-sans lg:text-3xl text-xl text-[#353535CC]">
                        Join a safe and friendly space to grow.
                        </p>
                    </div>
                </div>

                <div className="flex lg:flex-col lg:gap-10 gap-5 items-start">
                <div className="lg:h-28  hidden rounded-full lg:w-28 bg-[#EBDEBB] h-14 w-14 lg:flex items-center justify-center">
                        <Image src={job} className="lg:p-10 p-4" alt="sharing" />
                    </div>
                    <div className="lg:hidden block ">
                    <div className="lg:h-28 flex   rounded-full lg:w-28 bg-[#D3E6BF] h-14 w-14  items-center justify-center">
                        <Image src={job} className="lg:p-10 p-4" alt="sharing" />
                    </div>
                    </div>
                  
                    <div className="flex flex-col gap-4 lg:pt-0 pt-3 lg:w-full w-3/4">
                        <h1 className="font-roboto lg:block hidden font-semibold lg:text-4xl text-2xl text-[#353535]">
                        Opportunities for Experienced Professionals
                        </h1>
                        <h1 className="font-roboto lg:hidden block font-semibold lg:text-4xl text-2xl text-[#353535]">
                        Opportunities for <br /> Experienced  Professionals
                        </h1>
                        <p className="font-sans lg:text-3xl text-xl text-[#353535CC]">
                        Discover projects & assignments and jobs that value your expertise and optimize for your maturity and experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* clip */}
            <div className="relative lg:block hidden w-full -top-28">
    <div className="w-full relative">
        <Image 
            src={rect} 
            alt="rect" 
            className="w-full h-auto" 
            priority
        />
    </div>
    <div className="absolute top-[33%] left-[29%] transform -translate-x-1/2 -translate-y-1/2">
        <Image 
            src={circle} 
            alt="circle" 
            className="w-16 h-16 md:w-12 md:h-12" 
            priority
        />
    </div>
    <div className="absolute  top-[7%]  left-[44%] w-[50%]">
   <h1 className="text-[#353535] text-6xl font-bold font-roboto">
   Our Milestone
   </h1>
   <p className="text-[#353535CC] pt-7 text-2xl">
   Lorem incididunt Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. 
   </p>
    </div>
    <div className="flex absolute w-full top-[60%] justify-around">
        <div className="text-center">
            <h1 className=" text-[#043A53] font-roboto font-semibold text-6xl">
                10+
            </h1>
            <p className="text-[#353535CC] pt-3 font-sans text-4xl">
Years Experience
            </p>
        </div>
        <div className="text-center">
            <h1 className=" text-[#043A53] font-roboto font-semibold text-6xl">
                200+
            </h1>
            <p className="text-[#353535CC] pt-3 font-sans text-4xl">
Users Empowered
            </p>
        </div>
        <div className="text-center">
            <h1 className=" text-[#043A53] font-roboto font-semibold text-6xl">
                100+
            </h1>
            <p className="text-[#353535CC] pt-3 font-sans text-4xl">
Job Provided
            </p>
        </div>
    </div>

</div>

<div className="block lg:hidden w-full bg-white  mt-12  rounded-2xl">

    <div className="px-4 py-6">
   <h1 className="text-[#353535]  text-xl font-bold font-roboto">
   Our Milestone
   </h1>
   <p className="text-[#353535CC] lg:pt-7 pt-3 font-mulish lg:text-2xl text-base">
   Lorem incididunt Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. 
   </p>
    </div>
    <div className="flex w-full flex-wrap justify-evenly  items-center">
        <div className="text-center md:w-auto w-1/2">
            <h1 className=" text-[#043A53] font-roboto font-semibold text-3xl">
                10+
            </h1>
            <p className="text-[#353535CC] pt-3 font-sans text-lg">
Years Experience
            </p>
        </div>
        <div className="text-center md:w-auto w-1/2">
            <h1 className=" text-[#043A53] font-roboto font-semibold text-3xl">
                200+
            </h1>
            <p className="text-[#353535CC] pt-3 font-sans text-lg">
Users Empowered
            </p>
        </div>
        <div className="text-center md:mt-0 my-10">
            <h1 className=" text-[#043A53] font-roboto font-semibold text-3xl">
                100+
            </h1>
            <p className="text-[#353535CC] pt-3 font-sans text-lg">
Job Provided
            </p>
        </div>
    </div>

</div>

        
        </section>
    );
}
