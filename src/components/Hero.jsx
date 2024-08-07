import React from "react";
import { ReactTyped } from "react-typed";
export default function Hero() {
  return (
    <div className="text-white">
      <div className="h-screen text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-1">
          RU TURBO
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-4xl text-xl font-bold">
            Fast and reliable, get notified Via{" "}
          </p>
          <ReactTyped
            className="text-3xl pb-1 font-bold pl-2 red-theme"
            strings={["Call", "Email", "Discord", "Telegram", "SMS"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </div>

        <div className="flex justify-center items-center">
          <a className=" font-bold text-[#ffffff]">
            {" "}
            Join waitlist and snipe
          </a>
          <a className="md:text-2xl font-bold red-theme pl-2 pb-1">7 FREE</a>
          <a className=" font-bold pl-2 ">classes</a>
        </div>
        <div className=" flex justify-center items-center">
          <p className="font-bold text-2xl">Under</p>
          <p className="md:text-3xl font-bold red-theme pb-1 pl-2">1</p>
          <p className="pl-2 font-bold text-2xl">second</p>
        </div>

        <div className="justify-center">
          <a href="https://forms.gle/QsvvAsndmc6z4DDv8" target="_blank">
          <button className='get-started shadow-lg'>Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}