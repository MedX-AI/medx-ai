import React from 'react';
import Navbar from './components/navbar'; // Adjust the path as necessary

export default function Home() {
  return (
    <>
      <div className="my-5 mx-16 flex justify-center flex-col">
        <Navbar />
        

        <div>
          <div className="pt-10 text-8xl relative z-0">
            AI POWERED
          </div>
          <div className="pt-0 text-4xl relative z-0">
            MEDICAL DIAGNOSIS
          </div>
          <p className="text-left">
            We make dope stuff here
          </p>
        </div>
      </div>
    </>
  );
}