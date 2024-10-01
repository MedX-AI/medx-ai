"use client"
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="py-2 px-10 flex justify-between items-center bg-indigo-950 bg-opacity-30 backdrop-blur-sm  rounded-lg z-10">
      <div className="flex items-start">
        <h1 className="text-6xl">MEDX</h1>
        <h1 className="text-xl">AI</h1>
      </div>
      
      <nav className="flex space-x-6 items-center">
        <a href="#about" className="text-sm">THE PROBLEM</a>
        <a href="#about" className="text-sm">THE SOLUTION</a>
        <a href="#about" className="text-sm">ABOUT</a>
      </nav>
      <Link href="/signuppage" className="text-sm px-3.5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center space-x-2">
        <div>TRY OUT DEMO</div>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.5 -0.000315666C0.367392 -0.000315666 0.240215 0.0523627 0.146447 0.146131C0.0526784 0.239899 0 0.367076 0 0.499684V5.29968C0 5.62799 0.0646644 5.95308 0.190301 6.25639C0.315938 6.55971 0.500087 6.83531 0.732233 7.06745C1.20107 7.53629 1.83696 7.79968 2.5 7.79968H12.293L8.946 11.1457C8.85211 11.2396 8.79937 11.3669 8.79937 11.4997C8.79937 11.6325 8.85211 11.7598 8.946 11.8537C9.03989 11.9476 9.16722 12.0003 9.3 12.0003C9.43278 12.0003 9.56011 11.9476 9.654 11.8537L13.854 7.65368C13.9006 7.60724 13.9375 7.55206 13.9627 7.49132C13.9879 7.43057 14.0009 7.36545 14.0009 7.29968C14.0009 7.23392 13.9879 7.1688 13.9627 7.10805C13.9375 7.04731 13.9006 6.99213 13.854 6.94568L9.854 2.94568C9.76011 2.8518 9.63278 2.79905 9.5 2.79905C9.36722 2.79905 9.23989 2.8518 9.146 2.94568C9.05211 3.03957 8.99937 3.16691 8.99937 3.29968C8.99937 3.43246 9.05211 3.5598 9.146 3.65368L12.293 6.79968H2.5C2.10218 6.79968 1.72064 6.64165 1.43934 6.36034C1.15804 6.07904 1 5.69751 1 5.29968V0.499684C1 0.367076 0.947322 0.239899 0.853553 0.146131C0.759785 0.0523627 0.632608 -0.000315666 0.5 -0.000315666V-0.000315666Z" fill="white"></path>
        </svg>
      </Link>
    </div>
  );
}