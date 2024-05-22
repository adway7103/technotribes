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
        className="mt-8 bg-gradient-to-br bg-white py-4 bg-clip-text text-center text-[1.7rem] tracking-normal leading-relaxed text-transparent md:text-[5xl] lg:text-6xl 2xl:text-[7xl] "
      >
        <div className="mx-auto font-semibold">
          Are you looking forward <br /> to build a
          <FlipWords words={words} /> <br />
        </div>
      </motion.h1>
    </LampContainer>
  );
}
