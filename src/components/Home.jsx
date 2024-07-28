import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Dropdown from "./partials/Dropdown";
import Loader from "./Loader";

const Home = () => {
  document.title = "PRIMEX | HOMEPAGE";

  // Header data
  const [walpaper, setWalpaper] = useState("");
  const [trending, setTrending] = useState("");
  const [category, setCategory] = useState("all");

  const getWalpaper = async () => {
    const { data } = await axios.get(`/trending/all/day`);
    setWalpaper(data.results[Math.floor(Math.random() * data.results.length)]);
  };

  // Trending data
  const getTrending = async () => {
    const { data } = await axios.get(`/trending/${category}/day`);
    setTrending(data.results);
  };

  useEffect(() => {
    if (!walpaper) getWalpaper();
    if (!trending) getTrending();
    const interval = setInterval(() => {
      getWalpaper();
    }, 15000);
    return () => clearInterval(interval);
  }, [walpaper]);

  useEffect(() => {
    getTrending();
  }, [category]);

  return walpaper && trending ? (
    <div className="w-full h-full flex flex-col lg:flex-row overflow-y-hidden">
      <div className="h-[8vh] w-full lg:h-full lg:w-[20%] block">
        <Sidenav />
      </div>
      <div className="h-full w-[100%] px-3 overflow-y-auto lg:w-[80%] noscrollbar ">
        <div className="fixed  left-0  z-20 w-full">
          <Topnav />
        </div>
        <Header data={walpaper} />
        <Cards data={trending} func={setCategory} type={category} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
