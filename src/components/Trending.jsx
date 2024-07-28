import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Card from "./partials/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "PRIMEX | TRENDING";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const getTrending = async (newPage = page, reset = false) => {
    if (loading) return; // Prevent multiple requests
    setLoading(true);
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${newPage}`
      );
      if (data.results.length > 0) {
        setTrending((prev) => (reset ? data.results : [...prev, ...data.results]));
        setPage(newPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching trending data:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = async () => {
    setTrending([]);
    setPage(1);
    setHasMore(true);
    await getTrending(1, true);
  };

  useEffect(() => {
    refreshHandler();
  }, [category,duration]);

  return (
    <div className="h-fit w-full bg-[#1e1f24] px-7 py-1 ">
      <div className="w-full sm:flex sm:flex-row flex-col items-center justify-between fixed z-[999] top-0 left-0 px-2 py-2 ">
        <div className="flex w-full sm:w-[13vw] items-center ">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer p-2"
          ></i>
          <h1 className=" text-white font-[mori] text-2xl">Trending</h1>
          <div className="sm:hidden flex items-center gap-2 justify-end sm:gap-0 sm:justify-between w-full sm:w-[17vw] relative z-[999] ">
            <Dropdown
              name={"ALL"}
              data={["tv", "movie", "all"]}
              func={setCategory}
            />
            <Dropdown name={"DAY"} data={["day", "week"]} func={setDuration} />
          </div>
        </div>
        <div className=" w-full sm:w-[70vw] ">
          <Topnav />
        </div>
        <div className="hidden sm:flex items-center gap-2 justify-end sm:gap-0 sm:justify-between w-full sm:w-[17vw] ">
          <Dropdown
            name={"ALL"}
            data={["tv", "movie", "all"]}
            func={setCategory}
          />
          <Dropdown name={"DAY"} data={["day", "week"]} func={setDuration} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        loader={<h1>Loading</h1>}
        hasMore={hasMore}
        next={() => getTrending(page)}
        className="noscrollbar mt-[24vh] sm:mt-[10vw] h-fit w-full flex flex-wrap gap-7 items-center justify-center"
      >
        <Card data={trending} type={category} />
      </InfiniteScroll>
    </div>
  );
};

export default Trending;
