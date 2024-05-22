
"use client"
import { useState } from "react"; // Import useState

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`text-white px-[5%] py-[3%] flex justify-between w-full h-[16vh] fixed z-30 ${
        isOpen ? "bg-black bg-opacity-85" : ""
      }`}
    >
      <div className="2xl:text-[3rem] xl:text-[2rem] lg:text-[2rem] font-semibold align-middle flex text-center items-center text-[1.5rem]">
        Technotribes
      </div>
      <div className="hidden md:flex items-center justify-between gap-16 font-medium 2xl:text-[1.5rem] xl:text-[1.1rem] text-[1rem]">
        <div>Our Technologies</div>
        <div>Portfolio</div>
        <div>Testimonials</div>
        <button className="bg-black text-white flex items-center space-x-2">
          Get in Touch
        </button>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu (Slide-in) */}
      <div
        className={`md:hidden z-40 absolute top-full left-0 w-full h-screen bg-black bg-opacity-85 transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-8 items-center w-full p-8 text-[1.5rem]">
          <div className="block py-2">Our Technologies</div>
          <div className="block py-2">Portfolio</div>
          <div className="block py-2">Testimonials</div>
          <button className="bg-white text-black block w-full py-2 mt-4">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
