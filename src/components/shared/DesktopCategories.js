import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import SearchBar from "./SearchBar";

const DesktopCategories = ({ categories, setPage }) => {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  return (
    <>
      <div className="desktop-categories">
        <div className="container">
          <div
            className="search"
            onClick={() => setSearchBarIsOpen(!searchBarIsOpen)}
          >
            <ImSearch />
          </div>
          <ul>
            {categories.map((category, index) => (
              <li key={`${category.name}${index}`}>
                <Link to={category.path} onClick={() => setPage(1)}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {searchBarIsOpen ? (
        <SearchBar
          searchBarIsOpen={searchBarIsOpen}
          setSearchBarIsOpen={setSearchBarIsOpen}
          version="desktop"
        />
      ) : null}
    </>
  );
};

export default React.memo(DesktopCategories);
