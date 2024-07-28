import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloader } from "../store/actions/personAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removeperson } from "../store/reducers/personSlice";
import Loader from "./Loader";

const Persondetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloader(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? (
    <div className="h-screen w-full text-white overflow-y-auto">
      <nav className=" flex w-full gap-2 py-2 px-5 items-center mix-blend-difference">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer p-3"
        ></i>
      </nav>

      <div className=" flex flex-col sm:flex-row p-5 sm:p-10 justify-between items-center">
        <div className="relative w-full h-[40vh] sm:h-[20vw] sm:w-[15vw]">
          <img
            className=" h-full w-full object-cover object-top rounded-xl"
            src={
              info.detail.profile_path
                ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}`
                : `https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png`
            }
            alt=""
          />

          <div className="h-[5vh] w-full absolute top-[100%] flex justify-between items-center">
            {info.externalid.instagram_id && (
              <a
                href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              >
                <i className="ri-instagram-line text-2xl"></i>
              </a>
            )}
            {info.externalid.facebook_id && (
              <a
                href={`https://www.instagram.com/${info.externalid.facebook_id}`}
              >
                <i className="ri-facebook-line text-2xl"></i>
              </a>
            )}
            {info.externalid.twitter_id && (
              <a
                href={`https://www.instagram.com/${info.externalid.twitter_id}`}
              >
                <i className="ri-twitter-x-line text-2xl"></i>
              </a>
            )}
            {info.externalid.tiktok_id && (
              <a
                href={`https://www.instagram.com/${info.externalid.tiktok_id}`}
              >
                <i className="ri-tiktok-fill text-2xl"></i>
              </a>
            )}
          </div>
        </div>

        <div className="w-full sm:w-[70vw] mt-16">
          <h1 className="text-white font-[mori] text-[5vh] sm:text-[5vw] leading-none">
            {info.detail.name},
          </h1>
          <p className="font-[moril] text-md font-light opacity-70">
            Born in {info.detail.place_of_birth} at {info.detail.birthday}
          </p>
          <h5 className="mt-5 font-[moril] text-xl sm:hidden sm:w-2/3 ">
            {info.detail.biography.split(" ").slice(0, 15).join(" ")}
          </h5>
          <h5 className="mt-5 font-[moril] text-xl sm:block hidden sm:w-2/3 ">
            {info.detail.biography}
          </h5>
        </div>
      </div>

      <div>
        <h1 className="text-white ml-5 sm:ml-10 text-4xl font-[mori] mt-10">Worked In</h1>
        <div className=" overflow-x-auto flex gap-3 mt-5 py-2 px-5">
          {info.combinedCredits &&
            info.combinedCredits.cast.map((item, index) => (
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
    </div>
  ) : (
    <Loader />
  );
};

export default Persondetails;
