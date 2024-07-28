import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Card from "./partials/Card";
import Loader from "./Loader";


const Movie = () => {
  document.title = "PRIMEX | movie";
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const getmovie = async (newPage = page, reset = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios.get(`/movie/${category}?page=${newPage}`);
      if (data.results.length > 0) {
        setMovie((prev) => (reset ? data.results : [...prev, ...data.results]));
        setPage(newPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setMovie([]);
    setPage(1);
    setHasMore(true);
    await getmovie(1, true);
  };

  useEffect(() => {
    handleRefresh();
  }, [category]);

  return movie ? (
    <div className="h-fit w-full bg-[#1e1f24] px-7 py-1 ">
      <div className="w-full sm:flex sm:flex-row flex-col items-center justify-between fixed z-[999] top-0 left-0 px-2 py-2 ">
        <div className="flex w-full sm:w-[13vw] items-center ">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer p-2"
          ></i>
          <h1 className=" text-white font-[mori] text-2xl">Movie</h1>
          <div className="sm:hidden flex items-center gap-2 justify-end sm:gap-0 sm:justify-between w-full sm:w-[17vw] relative z-[999] ">
            <Dropdown
              name={"NOW_PLAYING"}
              data={["popular", "top_rated", "now_playing"]}
              func={setCategory}
            />
          </div>
        </div>
        <div className=" w-full sm:w-[70vw] ">
          <Topnav />
        </div>
        <div className="hidden sm:flex items-center gap-2 justify-end sm:gap-0 sm:justify-end w-full sm:w-[17vw] ">
          <Dropdown
            name={"NOW_PLAYING"}
            data={["popular", "top_rated", "now_playing"]}
            func={setCategory}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        loader={<h1 className="text-white">Loading...</h1>}
        hasMore={hasMore}
        next={() => getmovie(page)}
        className="noscrollbar mt-[24vh] sm:mt-[10vw] w-full flex flex-wrap gap-7 items-center justify-center overflow-hidden"
      >
        <Card data={movie} type="movie" />
      </InfiniteScroll>
    </div>
  ) : <Loader />;
};

export default Movie;
