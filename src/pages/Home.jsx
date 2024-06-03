import React from "react";
import { DiRasberryPi } from "react-icons/di";
import { FaMicrochip } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="px-4 text-center">
      <img
        className="mb-2 md:mx-auto md:max-w-sm rounded-lg"
        src="/professional.jpg"
        alt=""
      />
      <h2 className="text-3xl md:w-2/6 md:text-4xl mt-6 mx-auto">
        Your best destination for{" "}
        <span className="text-green-700">microchips</span> ,{" "}
        <span className="text-sky-600">digital electronics </span>
        and more
      </h2>
      <div className="flex justify-center mt-8 gap-4">
        <SiArduino className="text-sky-600 animate-pulse" size="50" />
        <DiRasberryPi className="text-rose-700 animate-pulse" size="50" />
        <FaMicrochip className="text-green-700 animate-pulse" size="50" />
      </div>
      <p className="mt-10 mb-3 text-lg">Check our products by clicking </p>
      <NavLink
        className="bg-green-700 px-5 py-[3px] rounded-md text-black"
        to="/products"
      >
        here
      </NavLink>{" "}
    </div>
  );
}
