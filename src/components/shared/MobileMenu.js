import React from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../data/categories";
import MobileCategories from "./MobileCategories";
import SearchBar from "./SearchBar";

const MobileMenu = ({ mobileMenuIsOpen, setMobileMenuIsOpen }) => {
  const { pathname } = useLocation();

  return (
    <div id="mobile-menu" className={mobileMenuIsOpen ? "open" : ""}>
      <div className="container">
        <div className="search">
          <p>Search</p>
          <SearchBar
            version="mobile"
            setMobileMenuIsOpen={setMobileMenuIsOpen}
          />
        </div>

        <ul className="mobile-menu">
          <li className="link-item">
            <Link to="/movies-popular">Movies</Link>
            {pathname.includes("movies") ? (
              <MobileCategories
                categories={categories.movies}
                setMobileMenuIsOpen={setMobileMenuIsOpen}
              />
            ) : null}
          </li>

          <li className="link-item">
            <Link to="/tv-shows-popular">TV Shows</Link>
            {pathname.includes("tv-shows") ? (
              <MobileCategories
                categories={categories.tv}
                setMobileMenuIsOpen={setMobileMenuIsOpen}
              />
            ) : null}
          </li>
          <li className="link-item">
            <Link
              to="/people-popular"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              People
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(MobileMenu);
