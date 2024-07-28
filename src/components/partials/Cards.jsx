import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Cards = ({ data, func }) => {
  return (
    <div className="h-[32vh] w-full py-2">
      <div className="pb-3 mt-2 flex justify-between">
        <h1 className="text-white font-[mori] text-3xl">Trending</h1>
        <Dropdown name={"TYPE"} data={["tv", "movie", "all"]} func={func} />
      </div>
      <div className=" overflow-x-auto flex gap-3 mt-1">
        {data.map((item, index) => (
          <Link
          to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className="block h-[24vh] sm:h-[23vh] w-[20vh] rounded-xl flex-shrink-0 overflow-hidden relative"
          >
            <img
              className=" h-full w-full object-cover"
              src={
                item.backdrop_path || item.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.poster_path
                    }`
                  : `https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png`
              }
              alt=""
            />
            <div className=" backdrop-blur bg-gradient-to-b from-transparent  to-[#000000db] absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-300">
              <div className="p-1 flex flex-col items-start justify-end h-full w-full">
                <h1 className="text-lg text-white font-[mori] leading-none">
                  {item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title}
                </h1>
                <p className="text-white w-[90%] font-[moril] mt-5 opacity-75 text-xs ">
                  {item.overview.split(" ").slice(0, 5).join(" ")}{" "}
                  <span className="text-blue-400">more..</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
