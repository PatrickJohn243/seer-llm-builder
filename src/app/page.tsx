import ParticlesComponent from "@/components/particles";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10"> {/* Add a container */}
        <ParticlesComponent id="particles"></ParticlesComponent>
        <div className="absolute text-white top-0 left-0 w-full min-h-screen flex items-center justify-center">
          {/* Content container */}
          <div className="flex flex-col items-center">
            <h1 className="text-8xl font-bold my-7 bg-gradient-to-b from-[#7f54dc] from-1% to-[#cb78ff] to-90% bg-clip-text text-transparent">SeerAI</h1>
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


      {/* <img src="bg.jpg"
        className="absolute inset-0 bg-contain bg-no-repeat w-full object-cover">
      </img> */}

      {/* <div className="min-h-screen flex flex-col items-center justify-center text-[#ab89f3] relative">
        <div className="text-center relative z-10">
          
          <h1 className="text-9xl font-bold my-7 bg-gradient-to-b from-[#7f54dc] from-1% to-[#8860e0] to-90% bg-clip-text text-transparent">Seer</h1>
          <h1 className="text-6xl font-bold my-2">
            CREATE YOUR OWN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              LLMS
            </span>
          </h1>
          <p className="text-base">
            We allow non-technical managers to start their own business LLM
          </p>
          <p className="text-base mb-8">
            without much technical hindrance.
          </p>
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

        <p className="mt-4 text-sm text-gray-400">
          Join over 100,720+ people on the waitlist
        </p>
      </div> */}
    </main>



  );
}