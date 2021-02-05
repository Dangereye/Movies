import React, { useEffect } from "react";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ open, toggle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <nav id="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <MdLocalMovies />
          <span>Movies</span>
        </Link>
        <ul className="desktop-menu">
          <li className="link-item">
            <Link to="/popular-movies" className="link">
              Movies
            </Link>
          </li>
          <li className="link-item">
            <Link to="/popular-tv-shows" className="link">
              TV Shows
            </Link>
          </li>
          <li className="link-item">
            <Link to="/popular-people" className="link">
              People
            </Link>
          </li>
        </ul>
        <div
          className={open ? "mobile-menu open" : "mobile-menu"}
          onClick={() => toggle(!open)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
