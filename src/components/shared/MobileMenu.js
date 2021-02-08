import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../data/categories";
import MobileCategories from "./MobileCategories";
import SearchBar from "./SearchBar";

const MobileMenu = ({ menuOpen, menuToggle }) => {
  const { pathname } = useLocation();
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);

  return (
    <div id="mobile-menu" className={menuOpen ? "open" : ""}>
      <div className="container">
        <div className="search">
          <p onClick={() => setSearchBarIsOpen(!searchBarIsOpen)}>Search</p>
          {searchBarIsOpen ? (
            <SearchBar
              searchBarIsOpen={searchBarIsOpen}
              setSearchBarIsOpen={setSearchBarIsOpen}
              version="mobile"
              menuToggle={menuToggle}
              menuOpen={menuOpen}
            />
          ) : null}
        </div>

        <ul className="mobile-menu">
          <li className="link-item">
            <Link to="/movies-popular">Movies</Link>
            {pathname.includes("movies") ? (
              <MobileCategories
                categories={categories.movies}
                menuOpen={menuOpen}
                menuToggle={menuToggle}
              />
            ) : null}
          </li>

          <li className="link-item">
            <Link to="/tv-shows-popular">TV Shows</Link>
            {pathname.includes("tv-shows") ? (
              <MobileCategories
                categories={categories.tv}
                menuOpen={menuOpen}
                menuToggle={menuToggle}
              />
            ) : null}
          </li>
          <li className="link-item">
            <Link to="/people-popular" onClick={() => menuToggle(!menuOpen)}>
              People
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(MobileMenu);
