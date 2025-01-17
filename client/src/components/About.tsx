'use client';
import { useState, useEffect, useRef } from 'react';
import { FaPause, FaPlay } from "react-icons/fa";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false); 
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const buttonRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const enableAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          console.log("Autoplay failed, waiting for user interaction.");
        });
      }
      document.removeEventListener("click", enableAutoplay);
    };

    document.addEventListener("click", enableAutoplay);

    return () => {
      document.removeEventListener("click", enableAutoplay);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isPlaying) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <section className="bg-[#6F7E5F]">
      <div className="flex flex-col gap-16 lg:px-14 px-5 lg:pt-20 pt-6">
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between">
          <div className="lg:w-1/2 w-full">
            <h1 className="font-roboto font-semibold xl:text-7xl lg:text-5xl text-2xl text-white">
              About Aprisio
            </h1>
            <p className="font-roboto lg:text-4xl text-xl lg:pt-4 pt-5 text-white">
              Post career Impact & Fulfilment
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="text-white !leading-relaxed xl:text-3xl lg:text-xl text-lg font-sans">
              Aprisio is a community of, for and by post career individuals whose careers may be behind them but their best days are ahead of them. This community seeks to explore new opportunities to stay productive, foster new, meaningful connections to stay connected, and pursue new interests to retain their zest for life.
            </p>
          </div>
        </div>

        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-fit h-fit '>
            <div className="lg:w-full xl:h-[614px] flex justify-center lg:h-[414px] h-[280px] rounded-3xl relative">
              <div className='w-fit'>
                <video
                  className="w-full h-full object-cover rounded-t-2xl"
                  ref={videoRef}
                  preload="auto"
                  autoPlay
                >
                  <source src="/video/Home_Page Video_140125.mp4" type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>

                <div className='flex justify-center items-center'>
                  <div
                    className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-200"
                  >
                    <div
                      ref={buttonRef}
                      onClick={handlePlayPause}
                      className="w-full h-full flex justify-center items-center"
                    >
                      {isPlaying ? (
                        <button className="w-20 h-20 rounded-full bg-white flex justify-center text-2xl items-center text-[#043A53]">
                          <FaPause />
                        </button> 
                      ) : (
                        <button className="w-20 h-20 rounded-full bg-white flex justify-center text-2xl items-center text-[#043A53]">
                          <FaPlay />
                        </button> 
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
