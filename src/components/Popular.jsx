import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Card from "./partials/Card";

const Popular = () => {
  document.title = "PRIMEX | POPULAR";
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [page, setPage] = useState(1);
  const [popular, setPopular] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const getPopular = async (newPage = page, reset = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios.get(`${category}/popular?page=${newPage}`);
      if (data.results.length > 0) {
        setPopular((prev) =>
          reset ? data.results : [...prev, ...data.results]
        );
        setPage(newPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching popular data:", error);
      setHasMore(false);
    } finally{
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setPopular([]);
    setPage(1);
    setHasMore(true);
    await getPopular(1, true);
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
          <h1 className=" text-white font-[mori] text-2xl">Popular</h1>
          <div className="sm:hidden flex items-center gap-2 justify-end sm:gap-0 sm:justify-between w-full sm:w-[17vw] relative z-[999] ">
            <Dropdown
              name={"MOVIE"}
              data={["tv", "movie"]}
              func={setCategory}
            />
          </div>
        </div>
        <div className=" w-full sm:w-[70vw] ">
          <Topnav />
        </div>
        <div className="hidden sm:flex items-center gap-2 justify-end sm:gap-0 sm:justify-end w-full sm:w-[17vw] ">
          <Dropdown
            name={"MOVIE"}
            data={["tv", "movie"]}
            func={setCategory}
          />

        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        loader={<h1>Loading</h1>}
        hasMore={hasMore}
        next={()=>getPopular(page)}
        className="noscrollbar mt-[24vh] sm:mt-[10vw] w-full flex flex-wrap gap-7 items-center justify-center overflow-hidden"
      >
        <Card data={popular} type={category} />
      </InfiniteScroll>
    </div>
  );
};

export default Popular;
