"use client";

import React from "react";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import GridGlobe from "../main/GridGlobe";
import Link from 'next/link';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          <Typewriter 
  options={{
    strings: ['Globe is', 'Customizable'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
      

        
        </motion.div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            {/* Providing */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              AKAKI CHACHAVA{" "}
            </span> 
            Front-end Developer
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] flex"
        >
          {/* I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills. */}
          <Typewriter 
  options={{
    strings: [' HI '
      
      
      , 'I am a Full Stack Software Engineer with Experience in Website Mobile, and Software development. Check out my projects and skills.'],
    autoStart: true,
    loop: true,
  }}
/>
        
        </motion.div >
       
        <a href="/ac3ak1.pdf"  download
        
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
       Download CV </a> 
       {/* <a 
            href="/AC3AK1CV" // assuming cv.pdf is in the public folder
            download
            className="flex flex-row items-center my-[15px] cursor-pointer text-blue-500" // You can style as needed
        >
            Download CV
        </a> */}

       <div className=" flex justify-center items-center w-50 left-200">


       </div>
    
       
      </div>

      <motion.div
        // variants={slideInFromRight(0.8)}
        className="w-30 md:w-2.5/4 m- lg:w-1/2 h-50% flex justify-center items-center"
      >
        {/* <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        /> */}
     
     <GridGlobe/>
          <p>try it</p>
          
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
