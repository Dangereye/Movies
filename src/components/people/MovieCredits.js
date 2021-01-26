import React from "react";
import { Link } from "react-router-dom";
import ItemImage from "../shared/ItemImage";
import Year from "../shared/Year";

const MovieCredits = ({ data }) => {
  // console.log("Movie Credits Data: ", data);
  return (
    <section>
      <div className="container">
        <h2>Movies ({data.length})</h2>
        <div className="grid-list">
          {data
            .sort((a, b) => {
              const aDate = new Date(a.release_date);
              const bDate = new Date(b.release_date);
              return bDate - aDate;
            })
            .map((movie, index) => {
              return (
                <div key={`movie-credits${index}`} className="grid-item">
                  <Link to={`/movies/${movie.id}`}>
                    <ItemImage
                      title={movie.title}
                      image={movie.poster_path}
                      width="188px"
                      height="283px"
                    />
                  </Link>
                  <div className="content">
                    <h3>{movie.title}</h3>
                    <Year date={movie.release_date} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MovieCredits;
