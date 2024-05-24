import React, { useState, useEffect } from "react";
import { CiLight,CiDark  } from "react-icons/ci";


export default function Register() {
  const [dark,light] = useState(true)
  const toggle =()=>{
    light(!dark)
  }
  return (
    <div>
      <div
        className={`flex items-center justify-center h-screen ${
          dark ? "bg-black" : "bg-white"
        }`}
      >
        <span
          className={`text-7xl  font-bold ${
            dark ? "text-slate-200" : "text-slate-900"
          }`}
        >
          This Is Register Page
        </span>
      </div>
      <button onClick={toggle}
             className={`absolute bottom-4 rounded-full right-4 p-2 ${dark ? ' bg-gray-200  text-black': 'bg-gray-800  text-white'} `}>
                {dark ? <CiLight/> : <CiDark/>}
      </button>
    </div>
  );
}
