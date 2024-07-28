import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  const navigate = useNavigate();
  return ytvideo && (
    <div className="h-full w-full text-white absolute top-0 left-0 bg-[#000000ac] flex justify-center items-center">
      <div className=" w-[90vw] h-[35vh]  sm:h-[50vh] sm:w-[50vw] relative">
      <i
          onClick={() => navigate(-1)}
          className="ri-close-fill absolute left-1/2 top-[-10%] -translate-x-1/2 -translate-y-1/2  text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer p-3"
        ></i>
        <ReactPlayer
          height="100%"
          width="100%"
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      </div>
    </div>
  );
};

export default Trailer;
