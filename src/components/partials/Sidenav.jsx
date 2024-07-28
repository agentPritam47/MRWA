import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {

  const [sidenav, setSidenav] = useState(false)
  return (
    <div className="h-[10vh] w-full lg:h-full lg:w-full border-r-2 border-zinc-600 text-white p-3 relative">
      <div className=" lg:p-5 flex items-center justify-between lg:gap-5 ">
        <div className="block lg:hidden text-2xl"><h1 onClick={()=>setSidenav(!sidenav)}>menu</h1></div>
        <div className=" flex gap-2">
          <i className="ri-tv-fill text-[#6556cd] text-2xl lg:text-3xl"></i>
          <h1 className=" font-bold text-lg lg:text-2xl font-[mori] mt-2">
            PRIMEX
          </h1>
        </div>
      </div>

      <div className="hidden lg:block">
        <h1 className=" px-5 text-xl font-semibold mt-5 pb-5 font-[mori]">
          New Feeds
        </h1>

        <Link
          to="/trending"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-lg transition-all duration-500"
        >
          <h1>
            <i className="ri-fire-fill mr-3"></i>Trending
          </h1>
        </Link>
        <Link
          to="/popular"
          className=" block hover:bg-[#6556cd] py-5 px-7 rounded-md text-lg transition-all duration-500"
        >
          <h1>
            <i className="ri-bard-fill mr-3"></i>Popular
          </h1>
        </Link>
        <Link
          to="/movie"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-lg transition-all duration-500"
        >
          <h1>
            <i className="ri-movie-2-fill mr-3"></i>Movies
          </h1>
        </Link>
        <Link
          to="/tv"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-lg transition-all duration-500"
        >
          <h1>
            <i className="ri-tv-2-fill mr-3"></i>Tv Shows
          </h1>
        </Link>
        <Link
          to="/people"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-lg transition-all duration-500"
        >
          <h1>
            <i className="ri-team-fill mr-3"></i>People
          </h1>
        </Link>

        <hr className=" border-zinc-500 mt-3" />

        <h1 className=" px-5 text-xl font-semibold mt-5 pb-5 font-[mori]">
          Information
        </h1>

        <Link to="/about" className=" block hover:bg-[#6556cd] py-5 px-7 rounded-md text-lg transition-all duration-500 ">
          <h1 >
            <i className="ri-information-2-fill mr-3"></i>About
          </h1>
        </Link >
        <Link to="/contact" className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-lg transition-all duration-500">
          <h1 >
            <i className="ri-phone-fill mr-3"></i>Contact
          </h1>
        </Link>
      </div>

      <div className={`block absolute w-[70vw] h-screen bg-[#1e1f24] z-[999] lg:hidden transition-all duration-500 ${sidenav ? "left-0" : "left-[-100%]"}`}>
        <h1 className=" px-5 text-2xl font-semibold mt-5 pb-5 font-[mori]">
          New Feeds
        </h1>

        <Link
          to="/trending"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-2xl transition-all duration-500"
        >
          <h1>
            <i className="ri-fire-fill mr-3"></i>Trending
          </h1>
        </Link>
        <Link
          to="/popular"
          className=" block hover:bg-[#6556cd] py-5 px-7 rounded-md text-2xl transition-all duration-500"
        >
          <h1>
            <i className="ri-bard-fill mr-3"></i>Popular
          </h1>
        </Link>
        <Link
          to="/movie"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-2xl transition-all duration-500"
        >
          <h1>
            <i className="ri-movie-2-fill mr-3"></i>Movies
          </h1>
        </Link>
        <Link
          to="/tv"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-2xl transition-all duration-500"
        >
          <h1>
            <i className="ri-tv-2-fill mr-3"></i>Tv Shows
          </h1>
        </Link>
        <Link
          to="/people"
          className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-2xl transition-all duration-500"
        >
          <h1>
            <i className="ri-team-fill mr-3"></i>People
          </h1>
        </Link>

        <hr className=" border-zinc-500 mt-3" />

        <h1 className=" px-5 text-xl font-semibold mt-5 pb-5 font-[mori]">
          Information
        </h1>

        <div className=" hover:bg-[#6556cd] py-5 px-7 rounded-md text-2xl transition-all duration-500 ">
          <Link to="/about">
            <i className="ri-information-2-fill mr-3"></i>About
          </Link>
        </div>
        <Link to="/contact" className="block hover:bg-[#6556cd] py-5 px-7 rounded-md text-2xl transition-all duration-500">
          <h1 >
            <i className="ri-phone-fill mr-3"></i>Contact
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
