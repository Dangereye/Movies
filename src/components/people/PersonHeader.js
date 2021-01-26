import React, { useEffect, useContext } from "react";
import FullDate from "../shared/FullDate";
import KnownFor from "./KnownFor";
import HomePageButton from "../shared/HomePageButton";
import { PeopleContext } from "../../contexts/PeopleContext";
import ImageItem from "../shared/ItemImage";

const PersonHeader = ({ details, movies, tv }) => {
  const { biography, setBiography } = useContext(PeopleContext);

  console.log("Details", details);
  console.log("Movies", movies);
  console.log("TV", tv);

  useEffect(() => {
    setBiography("");
    if (details.data.biography) {
      const str = details.data.biography;
      const match = str.match(/\.(\s)/g);
      const res = str.split(match[0]);
      res.forEach((item, index) => {
        if (item.length < 50 && res[index - 1]) {
          res[index - 1] = [...res[index - 1], " ", ...item];
          res.splice(index, 1);
        } else {
          return;
        }
      });
      setBiography(res);
    }
  }, [setBiography, details.data.biography]);

  return (
    <header id="person-header">
      <div className="container">
        <div className="content">
          <div className="image">
            <ImageItem
              image={details.data.profile_path}
              name={details.data.name}
              width="300px"
              height="450px"
            />
          </div>
          <div className="details">
            <h1>{details.data.name}</h1>
            <span className="group">
              <KnownFor
                department={details.data.known_for_department}
                gender={details.data.gender}
              />
            </span>
            <span className="group">
              <span>Born</span>
              <FullDate date={details.data.birthday} />
            </span>
            <span className="group">{details.data.place_of_birth}</span>
            {details.data.deathday && (
              <span className="group">
                <span>Died</span>
                <FullDate date={details.data.deathday} />
              </span>
            )}

            {biography && (
              <>
                <h3>Biography</h3>
                <p>{biography[0]}.</p>
                {biography[1] && <p>{biography[1]}.</p>}
              </>
            )}

            {details.data.homepage && (
              <HomePageButton url={details.data.homepage} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PersonHeader;
