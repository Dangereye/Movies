import React from "react";
import { Link } from "react-router-dom";
import ItemImage from "./ItemImage";
import Year from "./Year";

const GridItem = ({ data, path }) => {
  return (
    <div className="grid-item">
      <Link to={`${path}/${data.id}`}>
        {path === "/movies" && (
          <ItemImage
            image={data.poster_path}
            name={data.title}
            width="188px"
            height="283px"
          />
        )}
        {path === "/tv-shows" && (
          <ItemImage
            image={data.poster_path}
            name={data.name}
            width="188px"
            height="283px"
          />
        )}
        {path === "/people" && (
          <ItemImage
            image={data.profile_path}
            name={data.name}
            width="188px"
            height="283px"
          />
        )}
      </Link>
      <div className="content">
        {path === "/movies" && (
          <>
            <h3 className="item-title">{data.title}</h3>
            <Year date={data.release_date} />
          </>
        )}
        {path === "/tv-shows" && (
          <>
            <h3 className="item-title">{data.name}</h3>
            <Year date={data.first_air_date} />
          </>
        )}
        {path === "/people" && <h3 className="item-title">{data.name}</h3>}
      </div>
    </div>
  );
};

export default GridItem;
