import React from "react";
import { Link } from "react-router-dom";
import ItemImage from "./ItemImage";
import Year from "./Year";

const GridItem = ({ data, path }) => {
  switch (path) {
    case "/movie":
      return (
        <div className="grid-item">
          <Link to={`/movie/${data.id}`}>
            <ItemImage
              image={data.poster_path}
              name={data.title}
              width="188px"
              height="283px"
            />
          </Link>
          <div className="content">
            <h3 className="item-title">{data.title}</h3>
            <Year date={data.release_date} />
          </div>
        </div>
      );
    case "/tv-show":
      return (
        <div className="grid-item">
          <Link to={`/tv-show/${data.id}`}>
            <ItemImage
              image={data.poster_path}
              name={data.name}
              width="188px"
              height="283px"
            />
          </Link>
          <div className="content">
            <h3 className="item-title">{data.name}</h3>
            <Year date={data.first_air_date} />
          </div>
        </div>
      );
    case "/tv-shows/:id/season/:season":
      return (
        <div className="grid-item">
          <Link
            to={`/tv-shows/${data.details.id}/season/${data.season.season_number}`}
          >
            <ItemImage
              image={data.season.poster_path}
              name={data.season.name}
              width="188px"
              height="283px"
            />
          </Link>
          <div className="content">
            <h3 className="item-title">{data.season.name}</h3>
            <Year date={data.season.air_date} />
          </div>
        </div>
      );
    case "/person":
      return (
        <div className="grid-item">
          <Link to={`/person/${data.id}`}>
            <ItemImage
              image={data.profile_path}
              name={data.name}
              width="188px"
              height="283px"
            />
          </Link>
          <div className="content">
            <h3 className="item-title">{data.name}</h3>
            {data.character && <p>{data.character}</p>}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default React.memo(GridItem);
