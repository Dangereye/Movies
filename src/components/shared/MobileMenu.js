import React from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../data/categories";
import MobileCategories from "./MobileCategories";

const MobileMenu = ({ open, toggle }) => {
  const { pathname } = useLocation();

  return (
    <div id="mobile-menu" className={open ? "open" : ""}>
      <div className="container">
        <ul className="mobile-menu">
          <li className="link-item">
            <Link to="/popular-movies">Movies</Link>
            {pathname.includes("movies") ? (
              <MobileCategories
                categories={categories.movies}
                open={open}
                toggle={toggle}
              />
            ) : null}
          </li>

          <li className="link-item">
            <Link to="/popular-tv-shows">TV Shows</Link>
            {pathname.includes("tv-shows") ? (
              <MobileCategories
                categories={categories.tv}
                open={open}
                toggle={toggle}
              />
            ) : null}
          </li>
          <li className="link-item">
            <Link to="/popular-people" onClick={() => toggle(!open)}>
              People
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(MobileMenu);
