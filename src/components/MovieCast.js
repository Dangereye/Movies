import React from "react";
import { Link } from "react-router-dom";
import ItemImage from "./ItemImage";

const MovieCast = ({ cast }) => {
  return (
    <section className="movie-cast">
      <div className="container">
        <h2>Cast Members ({cast.length})</h2>
        <div className="items-list">
          {cast.map((person, index) => {
            return (
              <div key={index} className="list-item">
                <Link to="/">
                  <ItemImage name={person.name} image={person.profile_path} />
                </Link>
                <div className="content">
                  <h3>{person.name}</h3>
                  <p>{person.character}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MovieCast;
