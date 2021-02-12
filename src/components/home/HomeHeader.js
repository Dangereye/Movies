import React from "react";
import SearchBar from "../shared/SearchBar";

const HomeHeader = ({ background }) => {
  return (
    <header
      className="bg-image"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${background})`,
      }}
    >
      <div className="container">
        <div className="home-page">
          <h1>Millions of movies, TV shows and people. Go explore!</h1>
          <SearchBar version="homepage" />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
