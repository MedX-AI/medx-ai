import Image from "next/image";
import localFont from "next/font/local";
import React from 'react';
import Navbar from '../components/navbar';



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
      <div className="my-5 mx-16 flex justify-center flex-col">
        <Navbar />
        <div>
          <div className='flex flex-col justify-between'>
            <div className="pt-10 text-8xl relative z-0">
              AI POWERED
            </div>
            <div className="pt-0 text-4xl relative z-0">
              MEDICAL DIAGNOSIS
            </div>
          </div>
          <p className="absolute bottom-5 text-left">
            We make dope stuff here
          </p>
          <p className="absolute bottom-5 text-right">
            We make dope stuff heressss
          </p>
        </div>
      </div>
    </>
  );
}
