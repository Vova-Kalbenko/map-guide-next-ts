import Category from "@/app/data/Category";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center">
      <div>
        <Image
          src="/bg.png"
          alt="hero-image"
          width={800}
          height={200}
          className="w-full absolute mt-[-50px]"
        />
        <div className="mt-[70px] z-10">
          <h2 className="text-[55px] text-red-600 tracking-widest font-semibold">
            Guide
          </h2>
          <h2 className="text-[20px]">Your amazing city</h2>
          <div className="mt-5 z-10 flex gap-2 items-center justify-center">
            <input
              type="text"
              placeholder="Search what do u want"
              className="z-10 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm outline-red-400"
            />
            <button className="bg-red-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 flex flex-col justify-center items-center">
            <h2>Browse category</h2>
            <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3">
              {Category.map((item, id) => (
                <div key={id} className="border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-600 hover:scale-110 cursor-pointer transition-all">
                <Image src={item.icon} alt={item.name} width={30} height={30} /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// AIzaSyDnmFQjLf91jNnpw7bnaw7m3wsPOOQfrjU