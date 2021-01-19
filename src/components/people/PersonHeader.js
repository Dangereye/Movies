import React from "react";
import FullDate from "../shared/FullDate";
import KnownFor from "./KnownFor";
import HomePageButton from "./HomePageButton";

const PersonHeader = ({ details, movies, tv }) => {
  return (
    <header id="person-header">
      <div className="container">
        <div className="content">
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.data.profile_path}`}
              alt={details.data.name}
            />
          </div>
          <div className="details">
            <h2>{details.data.name}</h2>

            <KnownFor
              department={details.data.known_for_department}
              gender={details.data.gender}
            />
            <div className="born">
              <span>Born -</span>
              <FullDate date={details.data.birthday} />
              <span>{details.data.place_of_birth}</span>
            </div>
            <div className="death">
              {details.data.deathday ? (
                <>
                  <span>Died -</span>
                  <FullDate date={details.data.deathday} />
                </>
              ) : (
                ""
              )}
            </div>

            {details.data.homepage ? (
              <HomePageButton
                gender={details.data.gender}
                url={details.data.homepage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PersonHeader;
