import React, { useState } from "react";
import dogImage from "../assests/dog.png";
import dogli from "../assests/dogli.png";
import { CiLight, CiDark } from "react-icons/ci";

export default function Home() {
  const [dark, light] = useState(true);
  const toggle = () => {
    light(!dark);
  };
  return (
    <>
      <div
        className={`flex justify-center items-center h-screen ${
          dark ? "bg-black" : "bg-white"
        }`}
      >
        <div
          className={`text-9xl font-bold ${
            dark ? "text-yellow-500" : "text-blue-500"
          } relative`}
        >
          <span className="relative z-10">D</span>
          <span className="relative z-0">O</span>
          <span className="relative z-10">G</span>
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={`${dark ? dogli : dogImage}`}
              alt="Dog"
              className="w-24 h-24 rounded-full object-cover z-1"
            />
          </div>
        </div>
      </div>
      <button
        onClick={toggle}
        className={`absolute bottom-4 rounded-full right-4 p-2 ${
          dark ? " bg-gray-200  text-black" : "bg-gray-800  text-white"
        } `}
      >
        {dark ? <CiLight /> : <CiDark />}
      </button>
    </>
  );
}
