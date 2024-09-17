"use client"

import { motion } from "framer-motion"
import ParticlesComponent from "@/components/particles";
import Image from "next/image";
import CustomCursor from "@/components/custom-cursor";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50  // Start slightly offscreen from the bottom
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Adjust animation duration
        ease: "easeInOut"
      }
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {isMounted && (
        <CustomCursor
          imageSrc="/Vector 11.png" // Update this path
          width={25} // Adjust as needed
          height={25} // Adjust as needed
        />
      )}
      <div className="relative z-10"> {/* Add a container */}
        <ParticlesComponent id="particles"></ParticlesComponent>
        <div className="absolute text-white top-0 left-0 w-full min-h-screen flex items-center justify-center">
          {/* Content container */}
          <div className="flex flex-col items-center">
            <motion.div variants={textVariants} animate="visible" initial="hidden">
              <h1 className="text-8xl font-bold my-7 bg-gradient-to-b from-[#7f54dc] from-1% to-[#cb78ff] to-90% bg-clip-text text-transparent">SeerAI</h1>
            </motion.div>

            <div className="pb-7 text-center">
              <p className="">Craft production-grade LLMs with ease</p>
              <p className="">through drag-and-drop and templates</p>
            </div>
            <div className="bg-gray-800 p-1 rounded-2xl flex relative z-10">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                className="px-6 py-2 bg-indigo-600 text-white rounded-xl flex hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>



  );
}