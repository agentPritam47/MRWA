import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data,type }) => {
  return data.map((item, index ) => {
    // Determine the image source
    const imageUrl =
      item.poster_path || item.backdrop_path || item.profile_path
        ? `https://image.tmdb.org/t/p/original/${
            item.poster_path || item.backdrop_path || item.profile_path
          }`
        : `https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png`;

    const title =
      item.name ||
      item.title ||
      item.original_name ||
      item.original_title ||
      "No Title";
    const truncatedTitle = title.split(" ").slice(0, 3).join(" ");

    return (
      <Link
        to={`/${item.media_type || type}/details/${item.id}`}
        key={index}
        className="relative z-[10] h-[38vh] w-full sm:h-[38vh] sm:w-[23vh] flex-shrink-0"
      >
        <div className="h-[78%] w-full  rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="h-[22%] w-full flex items-center">
          <h1 className="text-white font-[moril] font-semibold text-xl">
            {truncatedTitle}
          </h1>
        </div>
        {item.vote_average && (
          <div className="bg-[#6555cd] text-bold h-[6vh] w-[6vh] sm:h-[3vw] sm:w-[3vw] flex items-center justify-center rounded-full absolute z-[100] top-[63%] sm:top-[5%] left-[84%] sm:left-[85%] text-white">
            {Math.floor(item.vote_average * 10)}%
          </div>
        )}
      </Link>
    );
  });
};

export default Card;
