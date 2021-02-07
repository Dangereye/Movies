import React from "react";
import { Link } from "react-router-dom";
import KnownFor from "../people/KnownFor";
import Year from "./Year";

const SearchResult = ({ path, icon, name, department, date, handleClick }) => {
  return (
    <Link className="search-result" to={path} onClick={handleClick}>
      <div className="title-group">
        <div className="title-icon">{icon}</div>
        <div className="title-name">{name}</div>
      </div>
      {department ? <KnownFor department={department} /> : null}
      {date ? <Year date={date} /> : null}
    </Link>
  );
};

export default SearchResult;
