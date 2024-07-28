import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white h-screen w-full p-5 sm:p-10 overflow-y-auto">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-white transition-all duration-300 hover:text-[#6555cd] text-3xl cursor-pointer"
      ></i>
      <h1 className="relative left-[60%] sm:left-1/2 -translate-x-1/2 inline-block font-[mori] text-3xl sm:text-5xl text-center border-b-[1px] border-white">
        About PRIMEX
      </h1>
      <div className="flex flex-col sm:flex-row mt-5 justify-between">
        <div className="w-full sm:w-[52%] sm:border-r border-white sm:px-5">
          <h1 className="font-[mori] text-4xl mt-5">My Story</h1>
          <p className=" font-[moril] text-lg mt-4">
            PRIMEX was born out of a love for cinema and a desire to solve the
            age-old problem of "What should I watch next?". We understand that
            finding the perfect movie can be overwhelming with the vast number
            of options available today. That's why we set out to create a
            solution that makes movie discovery easy, fun, and personalized.
          </p>
        </div>
        <div className="w-full sm:w-[45%]">
          <h1 className="font-[mori] text-4xl mt-5">How It Works</h1>
          <p className=" font-[moril] text-lg mt-4">
            This app utilizes cutting-edge algorithms and machine learning
            techniques to analyze your movie preferences and viewing history. By
            understanding your likes and dislikes, we provide recommendations
            that are uniquely suited to your tastes. Just rate a few movies, and
            let our app do the magic!
          </p>
        </div>
      </div>

      <h1 className="font-[mori] sm:text-center text-5xl mt-10">Features</h1>
      <div className="w-full sm:w-[50vw] mx-auto ">
        <p className="font-[moril] text-lg mt-4 ">
          Personalized Recommendations: Get suggestions based on your unique
          movie preferences
        </p>
        <p className="font-[moril] text-lg mt-4 ">
          Curated Lists: Explore our handpicked movie collections for every mood
          and occasion
        </p>
        <p className="font-[moril] text-lg mt-4 ">
          Search & Filter: Easily find movies by genre, release year, rating,
          and more.
        </p>
        <p className="font-[moril] text-lg mt-4 ">
          User Reviews & Ratings: Read reviews and ratings from other movie
          enthusiasts to help you make informed decisions.
        </p>
        <p className="font-[moril] text-lg mt-4 ">
          Watchlist: Keep track of movies you want to watch and never miss out
          on a great film.
        </p>
      </div>
    </div>
  );
};

export default About;
