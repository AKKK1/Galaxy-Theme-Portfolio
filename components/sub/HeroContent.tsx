"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import GridGlobe from "../main/GridGlobe";

const HeroContent = () => {
  return (
    <motion.section
      id="hero-section"
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-10 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        {/* Welcome Box */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" md:visible Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center gap-2"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-sm">
            <Typewriter
              options={{
                strings: ["Connect from", "Anywhere", "Anytime"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Akaki Chachava
            </span>{" "}
            Front-end Developer
          </span>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <Typewriter
            options={{
              strings: [
                "Hello",
                "I’m a Full Stack Software Engineer <br/> with experience in developing  -> <br/> <b> websites,   mobile applications <br/> and software solutions </b>. <br/> Explore my projects and skills <br/> to learn more!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        {/* Download Button */}
        <a
          href="/ac3ak1.pdf"
          download="Akaki_Chachava_CV"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download CV
        </a>
      </div>

      {/* Grid Globe */}
      <motion.div
        className="hidden  sm:flex w-full md:w-1.7/5 h-auto justify-center items-center lg:w-4/5"
      >
        <GridGlobe />
      </motion.div>
    </motion.section>
  );
};

export default HeroContent;
