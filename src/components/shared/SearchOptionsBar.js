import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";

const SearchOptionsBar = ({ setCategory, setPage }) => {
  const handleClick = (name) => {
    setPage(1);
    setCategory(name);
  };
  const history = useHistory();
  return (
    <div className="search-options-bar">
      <div className="container">
        <button
          className="history-previous-page"
          onClick={() => history.goBack()}
        >
          <IoIosArrowBack />
          <span>Back</span>
        </button>
        <ul>
          <li onClick={() => handleClick("movies")}>Movies</li>
          <li onClick={() => handleClick("tv-shows")}>TV shows</li>
          <li onClick={() => handleClick("people")}>People</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchOptionsBar;
