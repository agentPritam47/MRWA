import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";

const Header = ({ data }) => {
  return (
    <div className="w-full h-[50vh] sm:h-[58vh] rounded-2xl overflow-hidden relative z-[1] mt-16">
      <img
        className=" h-full w-full object-cover object-top"
        src={
          data.backdrop_path || data.poster_path
            ? `https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.poster_path
              }`
            : `https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png`
        }
        alt=""
      />
      <div className="h-full w-full bg-gradient-to-b from-transparent  to-[#000000db] absolute top-0 left-0 p-5 flex flex-col justify-end">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white  font-[mori] ">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className="text-white w-[100%] sm:w-[60%] font-[moril] sm:leading-normal mt-5 opacity-75">
            {data.overview.split(' ').slice(0, 20).join(' ')} <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more..</Link>
        </p>
        <p className=" text-white mt-3 ">
            {data.release_date && <span className=" inline-block pr-5"><i className="ri-megaphone-fill pr-2 text-yellow-500"></i>{data.release_date}</span>}
            <span><i className="ri-album-fill pr-2 text-yellow-500"></i>{data.media_type.toUpperCase()}</span>
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="px-3 py-2 w-fit bg-[#6556cd] rounded-lg text-white mt-3 inline-block font-[moril]">Watch Trailer</Link>
      </div>
    </div>
  )
};

export default Header;
