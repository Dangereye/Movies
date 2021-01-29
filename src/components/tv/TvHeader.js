import React from "react";
import ImageItem from "../shared/ItemImage";
import Genres from "../shared/Genres";
import HomePageButton from "../shared/HomePageButton";
import StarRating from "../shared/StarRating";
import Year from "../shared/Year";
import Overview from "../shared/Overview";

const TvHeader = ({ details }) => {
  const bgImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`,
  };
  return (
    <header className="bg-image" style={details.backdrop_path ? bgImage : null}>
      <div className="container">
        <div className="content">
          <div className="image">
            <ImageItem
              image={details.poster_path}
              name={details.name}
              width="300px"
              height="450px"
            />
          </div>
          <div className="details">
            <h1>{details.name}</h1>
            <span className="group">
              <Year date={details.first_air_date} />
            </span>
            <span className="group">{details.number_of_seasons} Season(s)</span>
            <span className="group">
              <Genres genres={details.genres} />
            </span>

            <h3>Overview</h3>
            <Overview data={details.overview} />
            <div className="py1">
              <StarRating data={details.vote_average} />
              <span>{details.vote_count} votes.</span>
            </div>
            <HomePageButton url={details.homepage} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TvHeader;
