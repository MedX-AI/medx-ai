import Image from "next/image";

export default function Home() {
  return (
    <div className="my-5 backdrop-blur-sm mx-10 py-2 px-10 bg-indigo-950 flex justify-center flex-col rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-start">
          <h1 className="text-6xl">MEDX</h1>
          <h1 className="text-xl">AI</h1>
        </div>
        
        <nav className="flex space-x-6 items-center">
          <a href="#about" className="text-sm">WHAT WE DO</a>
          <a href="#about" className="text-sm">THE PROBLEM</a>
          <a href="#about" className="text-sm">THE SOLUTION</a>
          <a href="#about" className="text-sm">ABOUT</a>
        </nav>
          <a href="#demo" className="text-sm p-3.5 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full">TRY OUT DEMO</a>
      </div>

    </div>
  );
}
