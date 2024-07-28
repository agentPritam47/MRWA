import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer"
      ></i>
      <h1 className="text-white font-[mori] text-xl sm:text-4xl mt-10 text-center">Email me on pritamdas5370@gmail.com</h1>
    </div>
  );
};

export default Contact;
