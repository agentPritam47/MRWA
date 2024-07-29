import React, { useEffect, useState, useCallback } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import debounce from "lodash.debounce";

const Home = () => {
  document.title = "PRIMEX | HOMEPAGE";

  const [walpaper, setWalpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const getWalpaper = useCallback(async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setWalpaper(data.results[Math.floor(Math.random() * data.results.length)]);
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
    }
  }, []);

  const getTrending = useCallback(async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trending data:", error);
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    if (!walpaper) getWalpaper();
    const interval = setInterval(() => {
      getWalpaper();
    }, 15000);
    return () => clearInterval(interval);
  }, [walpaper, getWalpaper]);

  useEffect(() => {
    const debouncedGetTrending = debounce(getTrending, 300);
    debouncedGetTrending();
    return () => debouncedGetTrending.cancel();
  }, [category, getTrending]);

  return !loading && walpaper && trending.length ? (
    <div className="w-full h-full flex flex-col lg:flex-row overflow-y-hidden">
      <div className="h-[8vh] w-full lg:h-full lg:w-[20%] block">
        <Sidenav />
      </div>
      <div className="h-full w-[100%] px-3 overflow-y-auto lg:w-[80%] noscrollbar">
        <div className="fixed left-0 z-20 w-full">
          <Topnav />
        </div>
        <Header data={walpaper} />
        <Cards data={trending} func={setCategory} type={category} />
      </div>
    </div>
  ) : (
    <Loader /> // Consider using a Skeleton Screen or Placeholder here
  );
};

export default Home;
