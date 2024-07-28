import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import ItemDetail from "./components/partials/ItemDetail.jsx";
import Popular from "./components/Popular.jsx";
import Movie from "./components/Movie.jsx";
import TVshows from "./components/TVshows.jsx";
import People from "./components/People.jsx";
import Moviedetails from "./components/Moviedetails.jsx";
import Tvdetails from "./components/Tvdetails.jsx";
import Persondetails from "./components/Persondetails.jsx";
import Trailer from "./components/partials/Trailer.jsx";
import Notfound from "./components/Notfound.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#1e1f24] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TVshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Persondetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
