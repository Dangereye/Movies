import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { TVContext } from "../../contexts/TVContext";
import MobileCategories from "./MobileCategories";

const MobileMenu = ({ open, toggle }) => {
  // const { categories, setCategory, setPage } = useContext(MovieContext);
  const movies = useContext(MovieContext);
  const tv = useContext(TVContext);
  return (
    <div id="mobile-menu" className={open ? "open" : ""}>
      <div className="container">
        <ul className="mobile-menu">
          <li className="link-item">
            <Link to="/movies" onClick={() => toggle(!open)}>
              Movies
            </Link>
            <MobileCategories
              categories={movies.categories.movies}
              setCategory={movies.setCategory}
              setPage={movies.setPage}
              open={open}
              toggle={toggle}
            />
          </li>

          <li className="link-item">
            <Link to="/tv-shows" onClick={() => toggle(!open)}>
              TV Shows
            </Link>
            <MobileCategories
              categories={tv.categories.tv}
              setCategory={tv.setCategory}
              setPage={tv.setPage}
              open={open}
              toggle={toggle}
            />
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
