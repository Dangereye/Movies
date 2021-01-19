import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import MobileCategories from "./MobileCategories";

const MobileMenu = ({ open, toggle }) => {
  const { categories, setCategory, setPage } = useContext(MovieContext);
  return (
    <div id="mobile-menu" className={open ? "open" : ""}>
      <div className="container">
        <ul className="mobile-menu">
          <li className="link-item">
            <Link to="/movies" onClick={() => toggle(!open)}>
              Movies
            </Link>
            <MobileCategories
              categories={categories.movies}
              setCategory={setCategory}
              setPage={setPage}
              open={open}
              toggle={toggle}
            />
          </li>

          <li className="link-item">
            <Link to="/tv-shows" onClick={() => toggle(!open)}>
              TV Shows
            </Link>
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
