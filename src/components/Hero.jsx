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
            Fast and reliable, get notified via {" "}
          </p>
          <ReactTyped
            className="text-3xl pb-1 font-bold pl-2 red-theme"
            strings={["Call", "Email", "Discord", "Telegram", "SMS"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </div>

        <div className="mt-10 flex justify-center items-center">
          <p className=" font-bold text-[#ffffff]">
            Join waitlist below and snipe </p>
          <p className="font-bold red-theme pl-2 text-2xl pb-1"> 7 FREE</p>
          <p className=" font-bold pl-2 ">classes</p>
        </div>
        <div className=" flex justify-center items-center">
          <p className="font-bold">Under</p>
          <p className="md:text-2xl font-bold red-theme pb-1 pl-2">ONE</p>
          <p className="pl-2 font-bold">second</p>
        </div>

        <div className="justify-center">
          <a href="https://forms.gle/QsvvAsndmc6z4DDv8" target="_blank">
          <button className='get-started'>Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}