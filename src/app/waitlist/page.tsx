"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, memo } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ParticlesComponent from "@/components/particles";
import CustomCursor from "@/components/custom-cursor";

const MemoizedParticlesComponent = memo(ParticlesComponent);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const moonAnimation = {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {isMounted && (
        <CustomCursor imageSrc="/Vector 11.png" width={25} height={25} />
      )}
      <div className="relative z-10">
        <MemoizedParticlesComponent id="particles" />

        <div className="absolute text-white top-0 left-0 w-full min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <motion.div
              variants={textVariants}
              animate="visible"
              initial="hidden"
            >
              <h1 className="text-8xl font-bold my-7 bg-gradient-to-b from-[#7f54dc] from-1% to-[#cb78ff] to-90% bg-clip-text text-transparent">
                COMING SOON!
              </h1>
            </motion.div>

            <div className="pb-7 text-center"> 
              {/* <p className="">You Are In!</p> */}
              <p className="">For more updates follow us on our social media</p>
              <div className="flex space-x-10 mt-4 justify-center"> 
                <FaFacebook className="hover:scale-125 transition duration-700 size-10 text-[#812bd1] hover:text-[#9f65d5]" />
                <FaLinkedin className="hover:scale-125 transition duration-700 size-10 text-[#812bd1] hover:text-[#9f65d5]" />
                <FaXTwitter className="hover:scale-125 transition duration-700 size-10 text-[#812bd1] hover:text-[#9f65d5]" />
              </div>
            </div>
          </div>

          <motion.div
            animate={moonAnimation}
            className="absolute bottom-[-20%] left-0 right-0 flex justify-center items-center w-full"
          >
            <img
              src="download.svg"
              className="w-full max-w-[100%] h-auto"
              alt="Moon"
            />
          </motion.div>

        </div>
      </div>
    </main>
  );
}