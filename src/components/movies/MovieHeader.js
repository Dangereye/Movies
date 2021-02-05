import React from "react";
import Genres from "../shared/Genres";
import RunTime from "../shared/RunTime";
import Year from "../shared/Year";
import ImageItem from "../shared/ItemImage";
import StarRating from "../shared/StarRating";
import Overview from "../shared/Overview";

const MovieHeader = ({ details, credits }) => {
  const bgImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`,
  };
  const director = credits.crew.find((member) => member.job === "Director");
  return (
    <header className="bg-image" style={details.backdrop_path ? bgImage : null}>
      <div className="container">
        <div className="content">
          <div className="image">
            <ImageItem
              image={details.poster_path}
              name={details.title}
              width="300px"
              height="450px"
            />
          </div>
          <div className="details">
            <h1>{details.title}</h1>
            <span className="group">
              <Year date={details.release_date} />
            </span>
            <span className="group">
              <Genres genres={details.genres} />
            </span>
            <span className="group">
              <RunTime runtime={details.runtime} />
            </span>

            <h3>Overview</h3>
            <Overview data={details.overview} />
            <div className="py1">
              <StarRating data={details.vote_average} />
              <span>{details.vote_count} votes.</span>
            </div>
            <h3>Director</h3>
            <p>{director.name ? director.name : "Unknown"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(MovieHeader);
