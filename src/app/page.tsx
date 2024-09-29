"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, memo } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

import ParticlesComponent from "@/components/particles";
import CustomCursor from "@/components/custom-cursor";

const MemoizedParticlesComponent = memo(ParticlesComponent);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [isShaking, setIsShaking] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(/^\S+@\S+\.\S+$/.test(newEmail));
  };

  const handleJoinWaitlist = async () => {
    if (!isEmailValid) {
      console.error("Please enter a valid email address.");
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 350);
      return;
    }

    if (email) {
      try {
        const response = await fetch("/api/save-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();
        if (response.ok) {
          console.log(result.message);
          setEmail("");
          // Navigate to the waitlist page
          router.push('/waitlist');
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error submitting email:", error);
      }
    } else {
      console.error("Please enter a valid email address.");
    }
  };

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

  const shakeVariants = {
    initial: { x: 0, rotate: 0 },
    shake: {
      x: [-5, 5, -3, 3, 0],
      //rotate: [-2, 2, -1, 1, 0],
      transition: {
        duration: 0.35,
        ease: "easeOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {isMounted && (
        <CustomCursor imageSrc="/Vector 11.png" width={25} height={25} />
      )}
      <div className="relative z-10">
        <MemoizedParticlesComponent id="particles" />

        <div className="absolute text-white top-0 left-0 w-full min-h-screen flex items-center justify-center">
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <img
              src="/colored_seer.png"
              alt="SeerAI Logo"
              className="w-36 h-auto" // Adjust size as needed
            />
          </div>
          <div className="flex flex-col items-center w-full">
            <motion.div
              variants={textVariants}
              animate="visible"
              initial="hidden"
            >
              <h1 className="text-8xl font-bold my-7 bg-gradient-to-b from-[#7f54dc] from-1% to-[#cb78ff] to-90% bg-clip-text text-transparent">
                SeerAI
              </h1>
            </motion.div>

            <div className="pb-7 text-center">
              <p className="">Craft production-grade LLMs with ease</p>
              <p className="">through drag-and-drop and templates</p>
            </div>

            <motion.div
              className="w-[400px] bg-neutral-800 p-1 rounded-lg flex justify-between relative z-10"
              variants={shakeVariants}
              animate={isShaking ? "shake" : "initial"}
              initial="initial"
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-transparent text-sm px-2 text-white placeholder-gray-400 focus:outline-none"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className="right-1.5 px-6 py-2 text-sm bg-[#812bd1] text-white rounded-md flex hover:bg-[#9f65d5] focus:outline-none focus:ring-2 focus:ring-[#9f65d5] focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={handleJoinWaitlist}
              >
                Join Waitlist
              </button>
            </motion.div>
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

          <div className="fixed bottom-10 space-x-10 flex">
            <a href="https://www.facebook.com/profile.php?id=61566099090560" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:scale-125 transition duration-700 size-5 text-[#812bd1] hover:text-[#9f65d5]" />
            </a>
            <FaLinkedin className="hover:scale-125 transition duration-700 size-5 text-[#812bd1] hover:text-[#9f65d5]" />
            <FaXTwitter className="hover:scale-125 transition duration-700 size-5 text-[#812bd1] hover:text-[#9f65d5]" />
          </div>
        </div>
      </div>
    </main>
  );
}