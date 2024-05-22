"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../ui/Lamp";
import { FlipWords } from "@/app/ui/flipwords";
export function Hero() { const words = ["Product", "MVP", "Website"];
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br bg-white py-4 bg-clip-text text-center  tracking-normal leading-tight text-transparent  "
      >
        <div className="mx-auto font-semibold md:text-[5xl] lg:text-6xl 2xl:text-[7xl] text-[2rem]">
          Are you looking <br /> to build a
          <FlipWords words={words} /> <br />
        </div>
        <div className="md:mt-[2rem] mt-[1.5rem] md:text-xl lg:text-2xl 2xl:text-[5xl] text-[1.3rem]">
          Move fast with us
        </div>
        <div className="flex gap-8 justify-center md:mt-[1.7rem] mt-[1.5rem] md:text-[1.3rem] text-[1rem]">
          <div>
            <button className="px-4 py-2 rounded-full bg-cyan-200 text-black font-semibold">
              Get in Touch
            </button>
          </div>
          <div>
            <button className="px-4 py-2 rounded-full border-2 border-white">Learn More</button>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
