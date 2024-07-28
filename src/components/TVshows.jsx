import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Card from "./partials/Card";

const TVshows = () => {
  document.title = "PRIMEX | TV Shows";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [page, setPage] = useState(1);
  const [tv, setTv] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const getTv = async (newPage = page, reset = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios.get(`tv/${category}?page=${newPage}`);
      if (data.results.length > 0) {
        setTv((prev) => (reset ? data.results : [...prev, ...data.results]));
        setPage(newPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching tv data:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setTv([]);
    setPage(1);
    setHasMore(true);
    await getTv(1, true);
  };

  useEffect(() => {
    handleRefresh();
  }, [category]);

  return (
    <div className="h-fit w-full bg-[#1e1f24] px-7 py-1 ">
      <div className="w-full sm:flex sm:flex-row flex-col items-center justify-between fixed z-[999] top-0 left-0 px-5 py-2 ">
        <div className="flex w-full sm:w-[13vw] items-center ">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer p-3"
          ></i>
          <h1 className=" text-white font-[mori] text-2xl whitespace-nowrap">TV shows</h1>
          <div className="sm:hidden flex items-center gap-2 justify-end sm:gap-0 sm:justify-between w-full sm:w-[17vw] relative z-[999] ">
            <Dropdown
              name={"AIRING_TODAY"}
              data={["on_the_air", "popular", "top_rated", "airing_today"]}
              func={setCategory}
            />
          </div>
        </div>
        <div className=" w-full sm:w-[70vw] ">
          <Topnav />
        </div>
        <div className="hidden sm:flex items-center gap-2 justify-end sm:gap-0 sm:justify-end w-full sm:w-[17vw] ">
          <Dropdown
            name={"AIRING_TODAY"}
            data={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={setCategory}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        loader={<h1>Loading</h1>}
        hasMore={hasMore}
        next={() => getTv(page)}
        className="noscrollbar mt-[24vh] sm:mt-[10vw] w-full flex flex-wrap gap-7 items-center justify-center overflow-hidden"
      >
        <Card data={tv} type="tv" />
      </InfiniteScroll>
    </div>
  );
};

export default TVshows;
