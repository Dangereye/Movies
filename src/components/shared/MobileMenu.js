import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { TVContext } from "../../contexts/TVContext";
import MobileCategories from "./MobileCategories";

const MobileMenu = ({ open, toggle }) => {
  const { pathname } = useLocation();
  const movies = useContext(MovieContext);
  const tv = useContext(TVContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="mobile-menu" className={open ? "open" : ""}>
      <div className="container">
        <ul className="mobile-menu">
          <li className="link-item">
            <Link to="/movies">Movies</Link>
            {pathname === "/movies" ? (
              <MobileCategories
                categories={movies.categories.movies}
                setCategory={movies.setCategory}
                setPage={movies.setPage}
                open={open}
                toggle={toggle}
              />
            ) : null}
          </li>

          <li className="link-item">
            <Link to="/tv-shows">TV Shows</Link>
            {pathname === "/tv-shows" ? (
              <MobileCategories
                categories={tv.categories.tv}
                setCategory={tv.setCategory}
                setPage={tv.setPage}
                open={open}
                toggle={toggle}
              />
            ) : null}
          </li>
          <li className="link-item">
            <Link to="/people" onClick={() => toggle(!open)}>
              People
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
