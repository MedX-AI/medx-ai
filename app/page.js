import Image from "next/image";

export default function Home() {
  return (
    <div className="m-5 flex justify-center flex-col">

      <div className="flex justify-between items-center">
        <div className="flex">
          <h1 className="text-8xl">MEDX</h1>
          <h1 className="text-4xl"><sup>AI</sup></h1>
        </div>
        
        <nav className="flex space-x-4 items-center">
          <a href="#about" className="text-l">WHAT WE DO</a>
          <a href="#about" className="text-l">THE PROBLEM</a>
          <a href="#about" className="text-l">THE SOLUTION</a>
          <a href="#about" className="text-l">ABOUT</a>
        </nav>
          <a href="#demo" className="text-xl">TRY OUT DEMO</a>
      </div>

    </div>
  );
}
