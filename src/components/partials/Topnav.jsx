import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";

const Topnav = () => {
  const [querry, setQuerry] = useState("");
  const [search, setSearch] = useState([]);

  const getSearches = async () => {
    if (!querry) {
      setSearch([]);
      return;
    }
    try {
      const { data } = await axios.get(`/search/multi?query=${querry}`);
      setSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [querry]);

  return (
    <div className="w-full text-white p-3 relative z-50">
      <div className="relative left-1/2 -translate-x-1/2 sm:w-[35vw] w-[80vw] flex items-center gap-5">
        <i className="ri-search-2-line text-xl"></i>
        <input
          onChange={(e) => setQuerry(e.target.value)}
          value={querry}
          className="w-[60vw] sm:w-[30vw] py-2 px-5 rounded-full outline-none text-white bg-transparent text-lg"
          type="text"
          placeholder="Search here"
        />
        {querry && (
          <i
            onClick={() => setQuerry("")}
            className="ri-close-large-line text-xl"
          ></i>
        )}
        {querry && (
          <div className="w-[100%] max-h-[30vh] sm:max-h-[20vw] absolute top-[100%] left-0 overflow-x-hidden overflow-y-auto mb-2 bg-zinc-800 px-2 z-10">
            {search.map((item, index) => (
              <Link
                to={`/${item.media_type}/details/${item.id}`}
                key={index}
                className="w-full h-[10vh] sm:h-[10vw] flex items-end sm:items-center justify-between mb-6 sm:mb-3 hover:bg-zinc-700"
              >
                <div className="h-full w-[30%] rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={
                      item.backdrop_path || item.poster_path
                        ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`
                        : `https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png`
                    }
                    alt=""
                  />
                </div>
                <div className="h-full w-[70%] font-bold px-7 mt-7">
                  <h1 className="text-xl sm:text-2xl">
                    {item.name || item.title || item.original_name || item.original_title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Topnav;
