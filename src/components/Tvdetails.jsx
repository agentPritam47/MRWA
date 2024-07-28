import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloader } from "../store/actions/tvActions ";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removetv } from "../store/reducers/tvSlice";
import Loader from "./Loader";

const Tvdetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloader(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div className="w-full h-fit relative bg-black">
      <div className="h-screen w-full">
        <img
          className=" h-full w-full object-cover object-top opacity-70"
          src={
            info.detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`
              : `https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png`
          }
          alt=""
        />
      </div>

      <div className=" absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[#000000ad] overflow-y-auto">
        <nav className=" flex w-full gap-2 py-2 px-5 items-center mix-blend-difference">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer p-3"
          ></i>
          <h1 className=" text-white font-[mori] text-2xl">TV</h1>
        </nav>

        <div className=" flex-shrink-0 mt-10 px-5 sm:px-10 py-5 flex flex-col gap-10">
          <div className="flex w-full sm:w-[75vw] flex-col sm:flex-row justify-between">
            <div className="w-full h-[40vh] sm:h-[20vw] sm:w-[15vw] rounded-xl overflow-hidden">
              <img
                className=" h-full w-full object-cover object-top"
                src={
                  info.detail.poster_path || info.detail.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${
                        info.detail.poster_path || info.detail.backdrop_path
                      }`
                    : `https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png`
                }
                alt=""
              />
            </div>
            <div className=" w-full sm:w-[50vw] h-full ">
              <h1 className="text-4xl mt-2 sm:mt-0 sm:text-7xl text-white font-[mori]">
                {info.detail.name ||
                  info.detail.title ||
                  info.detail.original_name ||
                  info.detail.original_title}
                <span className="text-white text-xl">
                  ({info.detail.first_air_date.split("-")[0]})
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row sm:gap-10 text-lg">
                <p className="text-white opacity-70 ">
                  Type:
                  {info.detail.genres.map((item, index) => (
                    <span key={index} className="text-white ml-2">
                      {item.name}
                    </span>
                  ))}
                </p>

                <p className="text-white opacity-70">
                  <span>Runtime</span>: {info.detail.runtime}min
                </p>
              </div>
              <p className="mt-5 text-white font-[moril] text-md sm:text-xl sm:hidden">
                {info.detail.overview.split(" ").slice(0, 20).join(" ")}
              </p>
              <p className="mt-5 text-white font-[moril] text-md sm:text-xl hidden sm:block">
                {info.detail.overview}
              </p>

              {info.videos && (
                <Link
                  to={`${pathname}/trailer`}
                  className=" px-3 py-3 bg-[#6556cd] rounded-lg text-white mt-5 inline-block font-[moril]"
                >
                  Watch Trailer
                </Link>
              )}
            </div>
          </div>
          <div className="sm:flex flex-col hidden gap-5">
            <div className=" flex items-center w-fit gap-7">
              {info.watchproviders && info.watchproviders.flatrate && (
                <p className="text-white font-[moril] text-lg">
                  Available on Platform{" "}
                </p>
              )}
              {info.watchproviders &&
                info.watchproviders.flatrate &&
                info.watchproviders.flatrate.map((item, index) => (
                  <div
                    key={index}
                    className=" h-12 w-12 rounded-xl overflow-hidden"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    />
                  </div>
                ))}
            </div>
            <div className="flex gap-7 w-fit items-center">
              {info.watchproviders && info.watchproviders.rent && (
                <p className="text-white font-[moril] text-lg">
                  Available on Rent{" "}
                </p>
              )}
              {info.watchproviders &&
                info.watchproviders.rent &&
                info.watchproviders.rent.map((item, index) => (
                  <div
                    key={index}
                    className=" h-12 w-12 rounded-xl overflow-hidden"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* <div className=" relative h-fit w-full overflow-x-auto">
          <h1 className="text-white ml-5 sm:ml-10 text-4xl font-[mori] ">
            {info.recommendations.length > 0 && "Seasons"}
          </h1>
          <div className=" overflow-x-auto flex gap-3 mt-5 px-5 sm:px-10">
            {info.detail.seasons &&
              info.detail.seasons.map((item, index) => (
                <Link
                  // to={`/tv/details/${item.id}`}
                  key={index}
                  className="block h-[24vh] sm:h-[36vh] w-[20vh] sm:w-[30vh] rounded-xl flex-shrink-0 overflow-hidden relative"
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
                        {item.overview.split(" ").slice(0, 15).join(" ")}{" "}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div> */}

        <h1 className="text-white ml-5 sm:ml-10 text-4xl font-[mori] mt-10">
          {info.recommendations.length > 0 && "Similar Tv Shows"}
        </h1>
        <div className=" overflow-x-auto flex gap-3 mt-5 py-2 px-5">
          {info.recommendations &&
            info.recommendations.map((item, index) => (
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

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default Tvdetails;
