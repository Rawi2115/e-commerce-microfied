import React from "react";
import { DiRasberryPi } from "react-icons/di";
import { FaMicrochip } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="px-4 text-center">
      <h2 className="text-3xl">
        Your best destination for{" "}
        <span className="text-green-700">microchips</span> ,{" "}
        <span className="text-sky-600">digital electronics </span>
        and more
      </h2>
      <div className="flex justify-center mt-8 gap-4">
        <SiArduino className="text-sky-600" size="50" />
        <DiRasberryPi className="text-rose-700" size="50" />
        <FaMicrochip className="text-green-700" size="50" />
      </div>
      <p className="mt-10 text-lg">
        Check our products by clicking{" "}
        <NavLink className="underline" to="/products">
          here
        </NavLink>{" "}
      </p>
    </div>
  );
}
