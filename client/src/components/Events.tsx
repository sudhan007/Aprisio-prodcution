'use client';
import React from "react";
import Image from "next/image";
import yoga from "../../public/images/yoga.png";
import arrow2 from "../../public/images/arrow-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Events() {
  const data = [
    { title: "Yoga1", src: yoga, date: "21 Jan 2024" },
    { title: "Yoga2", src: yoga, date: "22 Jan 2024" },
    { title: "Yoga3", src: yoga, date: "23 Jan 2024" },
    { title: "Yoga4", src: yoga, date: "24 Jan 2024" },
    { title: "Yoga5", src: yoga, date: "25 Jan 2024" },
    { title: "Yoga6", src: yoga, date: "26 Jan 2024" },
    { title: "Yoga7", src: yoga, date: "27 Jan 2024" },
  ];

  return (
    <section className="bg-white ">
      {/* Header section */}
      <div className="px-14 lg:pt-14  pt-7 flex justify-between items-center">
        <h1 className="text-[#353535] lg:text-7xl text-2xl  font-roboto font-semibold">
          Our Upcoming Events <br />
          On this Year
        </h1>
        <p className="flex flex-col text-right">
          <span className="text-[#043A53] lg:text-6xl text-2xl font-semibold font-roboto">
            2024
          </span>
          <span className="text-[#353535CC] lg:text-xl text-xs font-sans font-semibold">
            JAN - DEC
          </span>
        </p>
      </div>

      {/* Swiper Carousel Section */}
      <div className="px-14 lg:py-20  lg:block hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
           spaceBetween={50}
          slidesPerView={3}
        //   effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            // depth: 100,
            // modifier: 2,
            slideShadows: false,
          }}
        //   pagination={{ clickable: true }}
          loop={true}
          loopAdditionalSlides={2} // Ensures the first two slides are appended for smooth scrolling
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-2xl"
                />

                {/* Event Info */}
                <div className="absolute px-4 py-4 flex justify-between bottom-0 text-center w-full z-10 bg-[#FFFFFFA1]">
                  <p className="font-mulish flex items-center text-xl text-[#353535]">
                    Yoga event - {item.date}
                  </p>
                  <div>
                    <Image src={arrow2} alt="Arrow" className="w-14 h-14" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block py-8  pb-16 lg:hidden">
      {data.map((item, index) => (
            <div key={index} className="flex pt-8 justify-center">
              <div className="relative h-96 w-[90%] rounded-2xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-2xl"
                />

                {/* Event Info */}
                <div className="absolute px-4 py-4 flex justify-between bottom-0 text-center w-full z-10 bg-[#FFFFFFA1]">
                  <p className="font-mulish flex items-center text-xl text-[#353535]">
                    Yoga event - {item.date}
                  </p>
                  <div>
                    <Image src={arrow2} alt="Arrow" className="w-14 h-14" />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
