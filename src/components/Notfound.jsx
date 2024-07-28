import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 w-full h-screen flex justify-center items-center">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer p-3"
      ></i>
      <h1 className=" text-white text-4xl sm:text-7xl font-[mori]">
        Not Found!
      </h1>
    </div>
  );
};

export default Notfound;
