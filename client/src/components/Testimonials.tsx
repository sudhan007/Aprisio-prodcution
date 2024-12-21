import Image from "next/image"
import quote from "../../public/images/quote.png"
import rect1 from "../../public/images/Rectangle_red.png"
import uncle from "../../public/images/uncle.png"
import rect2 from "../../public/images/Rectangle-2.png"
import rect3 from "../../public/images/Rectangle3.png"

export default function Testimonial() {

    return (
        <section className="lg:px-14 px-5 lg:pb-28 pb-8">
            <div className="lg:py-16 py-8">
                <h1 className="text-[#353535] font-roboto lg:text-8xl text-2xl font-semibold text-center ">User Testimonials</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 relative">

<div className="relative">
<div className="bg-white rounded-3xl ">
                    <div className="pt-9 px-9">
                        <Image src={quote} alt="quote" className="h-9 w-9" />
                    </div>
                    <div>
                    <Image src={rect1} alt="rect" className="h-16 w-16 absolute left-4 top-24" />
                    </div>
                    <p className="text-[#353535] px-9 lg:text-2xl text-xl font-sans py-6 z-10 relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .adipiscing elit, sed do eiusmod tempor incididunt ued do eiusmod tempor incididunt ut labore
                    </p>
                    <hr className="bg-[#E9E9E9] h-0.5 w-full" />
                    <div className="md:py-9 md:px-9 px-5 py-4 flex gap-4 items-center">
                        <div className="  h-20 w-20 rounded-full">
                            <Image src={uncle} alt="uncle" className="h-full w-full" />
                        </div>
                        <div>
                            <p className="text-[#353535] font-sans text-2xl">User Name</p>
                            <p className="text-[#35353599] font-sans  text-xl">Banglore</p>
                        </div>
                    </div>
                </div>
</div>
             
<div className="relative">
<div className="bg-white rounded-3xl ">
                    <div className="pt-9 px-9">
                        <Image src={quote} alt="quote" className="h-9 w-9" />
                    </div>
                    <div>
                    <Image src={rect2} alt="rect" className="h-16 w-16 absolute left-4 top-24" />
                    </div>
                    <p className="text-[#353535] px-9 lg:text-2xl text-xl font-sans py-6 z-10 relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .adipiscing elit, sed do eiusmod tempor incididunt ued do eiusmod tempor incididunt ut labore
                    </p>
                    <hr className="bg-[#E9E9E9] h-0.5 w-full" />
                    <div className="md:py-9 md:px-9 px-5 py-4 flex gap-4 items-center">
                        <div className="  h-20 w-20 rounded-full">
                            <Image src={uncle} alt="uncle" className="h-full w-full" />
                        </div>
                        <div>
                            <p className="text-[#353535] font-sans text-2xl">User Name</p>
                            <p className="text-[#35353599] font-sans  text-xl">Banglore</p>
                        </div>
                    </div>
                </div>
</div>

<div className="relative">
<div className="bg-white rounded-3xl ">
                    <div className="pt-9 px-9">
                        <Image src={quote} alt="quote" className="h-9 w-9" />
                    </div>
                    <div>
                    <Image src={rect3} alt="rect" className="h-16 w-16 absolute left-4 top-24" />
                    </div>
                    <p className="text-[#353535] px-9 lg:text-2xl text-xl font-sans py-6 z-10 relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .adipiscing elit, sed do eiusmod tempor incididunt ued do eiusmod tempor incididunt ut labore
                    </p>
                    <hr className="bg-[#E9E9E9] h-0.5 w-full" />
                    <div className="md:py-9 md:px-9 px-5 py-4 flex gap-4 items-center">
                        <div className="  h-20 w-20 rounded-full">
                            <Image src={uncle} alt="uncle" className="h-full w-full" />
                        </div>
                        <div>
                            <p className="text-[#353535] font-sans text-2xl">User Name</p>
                            <p className="text-[#35353599] font-sans  text-xl">Banglore</p>
                        </div>
                    </div>
                </div>
</div>

<div className="relative">
<div className="bg-white rounded-3xl ">
                    <div className="pt-9 px-9">
                        <Image src={quote} alt="quote" className="h-9 w-9" />
                    </div>
                    <div>
                    <Image src={rect1} alt="rect" className="h-16 w-16 absolute left-4 top-24" />
                    </div>
                    <p className="text-[#353535] px-9 lg:text-2xl text-xl font-sans py-6 z-10 relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .adipiscing elit, sed do eiusmod tempor incididunt ued do eiusmod tempor incididunt ut labore
                    </p>
                    <hr className="bg-[#E9E9E9] h-0.5 w-full" />
                    <div className="md:py-9 md:px-9 px-5 py-4 flex gap-4 items-center">
                        <div className="  h-20 w-20 rounded-full">
                            <Image src={uncle} alt="uncle" className="h-full w-full" />
                        </div>
                        <div>
                            <p className="text-[#353535] font-sans text-2xl">User Name</p>
                            <p className="text-[#35353599] font-sans  text-xl">Banglore</p>
                        </div>
                    </div>
                </div>
</div>

<div className="relative lg:block hidden">
<div className="bg-white rounded-3xl ">
                    <div className="pt-9 px-9">
                        <Image src={quote} alt="quote" className="h-9 w-9" />
                    </div>
                    <div>
                    <Image src={rect2} alt="rect" className="h-16 w-16 absolute left-4 top-24" />
                    </div>
                    <p className="text-[#353535] px-9 lg:text-2xl text-xl font-sans py-6 z-10 relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .adipiscing elit, sed do eiusmod tempor incididunt ued do eiusmod tempor incididunt ut labore
                    </p>
                    <hr className="bg-[#E9E9E9] h-0.5 w-full" />
                    <div className="md:py-9 md:px-9 px-5 py-4 flex gap-4 items-center">
                        <div className="  h-20 w-20 rounded-full">
                            <Image src={uncle} alt="uncle" className="h-full w-full" />
                        </div>
                        <div>
                            <p className="text-[#353535] font-sans text-2xl">User Name</p>
                            <p className="text-[#35353599] font-sans  text-xl">Banglore</p>
                        </div>
                    </div>
                </div>
</div>

<div className="relative lg:block hidden">
<div className="bg-white rounded-3xl ">
                    <div className="pt-9 px-9">
                        <Image src={quote} alt="quote" className="h-9 w-9" />
                    </div>
                    <div>
                    <Image src={rect3} alt="rect" className="h-16 w-16 absolute left-4 top-24" />
                    </div>
                    <p className="text-[#353535] px-9 lg:text-2xl text-xl font-sans py-6 z-10 relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .adipiscing elit, sed do eiusmod tempor incididunt ued do eiusmod tempor incididunt ut labore
                    </p>
                    <hr className="bg-[#E9E9E9] h-0.5 w-full" />
                    <div className="md:py-9 md:px-9 px-5 py-4 flex gap-4 items-center">
                        <div className="  h-20 w-20 rounded-full">
                            <Image src={uncle} alt="uncle" className="h-full w-full" />
                        </div>
                        <div>
                            <p className="text-[#353535] font-sans text-2xl">User Name</p>
                            <p className="text-[#35353599] font-sans  text-xl">Banglore</p>
                        </div>
                    </div>
                </div>
</div>
         
            </div>
        </section>
    )
}