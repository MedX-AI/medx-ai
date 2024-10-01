import Image from "next/image";
import localFont from "next/font/local";
import React from 'react';
import Navbar from '../components/navbar';
import Threebg from "@/components/three";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <div className="absolute h-full w-full"><Threebg/></div>
      <div className="my-5 mx-12 flex justify-center flex-col">
        <Navbar />
        <div>
          <div className='flex flex-col justify-between'>
            <div className="pt-10 text-8xl relative z-0">
              AI
            </div>
            <div className="pt-0 text-8xl relative z-0">
              POWERED
            </div>
          </div>

          <p className="absolute bottom-5 text-left">
            Transforming Healthcare,one click at a time
          </p>

          <div className='mix-blend-difference absolute bottom-5 right-12 flex flex-col justify-between text-right'>
            <div className="pt-10 text-8xl relative z-0 ">
              MEDICAL
            </div>
            <div className="pt-0 text-8xl relative z-0">
              DIAGNOSIS
            </div>
          </div>

          <div className='mix-blend-difference absolute bottom-5 right-12 flex flex-col justify-between text-right' style={{bottom: "-25rem"}}>
            <div className="pt-10 text-5xl relative z-0 right-0">
            Healthcare Redefined 
            </div>
            <div className="pt-0 text-xl relative z-0 w-1/4 right-0">
            MedX enhances healthcare efficiency through centralized records and AI-driven insights, enabling faster diagnoses and improved collaboration. Its focus on early disease detection and personalized medicine empowers both providers and patients for a healthier future.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
