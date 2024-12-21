'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import user from "../../public/images/user-icon.png";
import phone from "../../public/images/phone-icon.png";
import location from "../../public/images/location-icon.png";
import mail from "../../public/images/mail-icon.png";
import Script from 'next/script';
import { RiArrowRightLine } from 'react-icons/ri';
import { GiCheckMark } from 'react-icons/gi';

interface OTPlessResponse {
    success: boolean;
    message?: string;
    data?: {
        phone?: string; // Adjust based on actual expected data structure
    };
}

// Update the global interface to use the new types
declare global {
    interface Window {
        OTPlessSignin: {
            initiate: (params: { channel: string; email: string }) => Promise<OTPlessResponse>;
            authenticate: (params: { phoneCallback: (response: OTPlessResponse) => void; phone: string }) => void;
        };
        handleOTPlessSuccess?: () => void;
    }
}

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string()
    .regex(/^\d+$/, "Only numbers are allowed")
    .length(10, "Phone number must be exactly 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  terms: z.boolean().refine(val => val === true, "You must accept terms and conditions"),
});

const JoinCommunityForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
//   const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const emailValue = watch("email");
  const phoneValue = watch("phone");
  
  // Phone verification
//   const handlePhoneVerifyClick = async () => {
//     setIsLoading(true);
//     try {
//       window.OTPless.authenticate({
//         phoneCallback: (response: any) => {
//           if (response.data && response.data.phone === phoneValue) {
//             setPhoneVerified(true);
//           } else {
//             alert("Phone verification failed. Please try again.");
//           }
//           setIsLoading(false);
//         },
//         phone: phoneValue,
//       });
//     } catch (error) {
//       console.error("Error in phone verification:", error);
//       alert("Failed to initiate phone verification.");
//       setIsLoading(false);
//     }
//   };

const handleSendOtp = async (email: string) => {
window?.OTPlessSignin?.initiate({ channel: "EMAIL", email: email })
};

  useEffect(() => {
    if (emailValue) {
      const isValid = z.string().email().safeParse(emailValue).success;
      setIsEmailValid(isValid);
      if (!isValid) setEmailVerified(false);
    } else {
      setIsEmailValid(false);
      setEmailVerified(false);
    }
  }, [emailValue]);


  useEffect(() => {
    window.handleOTPlessSuccess = () => {
        setEmailVerified(true);
    };
    return () => {
        window.handleOTPlessSuccess = undefined; 
    };
}, []);


  // Real-time phone validation
  useEffect(() => {
    if (phoneValue) {
      const isValid = phoneValue.length === 10 && /^\d+$/.test(phoneValue);
    //   setIsPhoneValid(isValid);
      if (!isValid) setPhoneVerified(false);
    } else {
    //   setIsPhoneValid(false);
      setPhoneVerified(false);
    }
  }, [phoneValue]);

  const onSubmit = (data: object) => {
    if (!emailVerified || !phoneVerified) {
      alert("Please verify both email and phone number before submitting.");
      return;
    }
    console.log("Form data submitted:", data);
  };

  return <>
  
      <Script
        id="otpless-sdk"
        src="https://otpless.com/v4/headless.js"
        data-appid="HYRAB3PGUFKD9MFNZN2N"
        strategy="lazyOnload"
        onError={(e: Error) => {
            console.error('OTPLess Script failed to load', e)
          }}
      ></Script>
 <Script id="otpless-init" strategy="beforeInteractive"  onError={(e: Error) => {
          console.error('OTPLess-init Script failed to load', e)
        }}>
  {`
    const callback = (eventCallback) => {
      const ONETAP = () => {
        const { response } = eventCallback;
        console.log("OneTap Response:", response);
        if(response.status==="SUCCESS"){
           window.handleOTPlessSuccess?.();
        }
      };

      const OTP_AUTO_READ = () => {
        const { response: { otp } } = eventCallback;
        console.log("Auto-read OTP:", otp);
      };

      const FAILED = () => {
        const { response } = eventCallback;
        console.error("Verification failed:", response);
      };

      const FALLBACK_TRIGGERED = () => {
        const { response } = eventCallback;
        console.warn("Fallback triggered:", response);
      };

      const EVENTS_MAP = {
        ONETAP,
        OTP_AUTO_READ,
        FAILED,
        FALLBACK_TRIGGERED
      };

      if ("responseType" in eventCallback) EVENTS_MAP[eventCallback.responseType]?.();
    };

      window.OTPlessSignin = new OTPless(callback);
  `}
</Script>
    <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 grid-cols-1 gap-8">
      {/* Name Input */}
      <div className="relative">
        <Image 
          className="absolute left-7 top-10 transform -translate-y-1/2 w-7 h-7" 
          src={user} 
          alt="" 
        />
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className={`w-full text-xl pl-20 pr-3 py-2 h-20 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
        } rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 `}
        />
        {errors?.name && (
          <p className="text-red-500 mt-1">{errors.name.message?.toString()}</p>
        )}
      </div>
      {/* Email Input */}
      <div className="relative">
        <Image src={mail} alt="Email" className="absolute left-7 top-10 transform -translate-y-1/2 w-7 h-7" />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={`w-full text-xl pl-20 py-2  pr-3 h-20 border ${
              errors.email ? "border-red-500" : "border-gray-300"
          } rounded-2xl focus:ring-2 focus:outline-none focus:ring-blue-500`}
        />
        {isEmailValid  && (
         <button
         type="button"
         onClick={() => handleSendOtp(emailValue)}
        //  disabled={isLoading}
         className={`absolute right-3 font-semibold ${
           emailVerified ? "bg-[#0F8040] text-white text-xl py-3 pl-4 pr-5" : "bg-[#F0B73F] py-3 px-6 text-2xl text-[#353535]"
         } py-3 px-6 top-3 rounded-2xl font-mulish `}
       >
         {emailVerified ? (
           <><p className='flex gap-2 items-center'>
<span className='p-1.5 text-base rounded-full font-extrabold bg-white text-green-700'>
<GiCheckMark />
             </span>
             <span>Verified</span>
           </p>
             
           </>
         ) : (
           "Verify"
         )}
       </button>
       
        )}
        {/* {emailVerified && <p className="text-green-500">Verified</p>} */}
        {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
      </div>

      {/* Phone Input */}
      <div className="relative">
        <Image src={phone} alt="Phone" className="absolute left-7 top-10 transform -translate-y-1/2 w-6 h-6" />
        <input
          {...register("phone")}
          type="text"
          placeholder="Phone"
          inputMode="numeric"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); 
        }}
          className={`w-full text-xl pl-20 py-2  pr-3 h-20 border ${
            phoneVerified ? "border-green-500" : errors.phone ? "border-red-500" : "border-gray-300"
          } rounded-2xl focus:ring-2 focus:outline-none focus:ring-blue-500`}
        />
        {/* {isPhoneValid && !phoneVerified && (
          <button
            type="button"
                   inputMode="numeric"
            onClick={handlePhoneVerifyClick}
            disabled={isLoading}
            className="absolute right-5 top-5 text-green-600"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        )} */}
        {/* {phoneVerified && <p className="text-green-500">Verified</p>} */}
        {errors.phone && <p className="text-red-500">{errors.phone.message?.toString()}</p>}
      </div>

      {/* Address Input */}
      <div className="relative">
        <Image src={location} alt="Location" className="absolute left-7 top-10 transform -translate-y-1/2 w-7 h-7" />
        <input
          {...register("address")}
          type="text"
          placeholder="Address"
          className={`w-full text-xl pl-20 py-2  pr-3 h-20 border ${
            errors.address ? "border-red-500" : "border-gray-300"
          } rounded-2xl focus:ring-2 focus:outline-none focus:ring-blue-500`}
        />
        {errors.address && <p className="text-red-500">{errors.address.message?.toString()}</p>}
      </div>

      {/* Terms & Conditions */}
      <div className="mt-10 md:flex md:col-span-2 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                {...register("terms")}
                type="checkbox"
                className="appearance-none w-7 h-7 border border-[#043A538F] checked:bg-[#F2F5F6] rounded-full transition-all duration-200 cursor-pointer peer"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none">
                <svg
                  className="w-5 h-5 -mt-1 text-[#043A53]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
            </div>
            <p className="text-[#353535] -mt-1 text-xl">
              I agree to the <span className="text-[#043A53] font-semibold cursor-pointer hover:underline">Terms & Conditions</span>
            </p>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message?.toString()}</p>
          )}
        </div>
        <div className="flex md:justify-end  justify-center py-10 md:py-0">
          <button 
            type="submit" 
            className="bg-[#043A53] flex gap-5 items-center text-xl text-white font-mulish font-bold py-4 px-7 rounded-full hover:bg-[#e0a93a] transition duration-300"
          >
            Submit <span className="text-white bg-[#1249628C] p-2 rounded-full"><RiArrowRightLine/></span>
          </button>
        </div>
</div>     
    </form>
    </>
  
};

export default JoinCommunityForm;
