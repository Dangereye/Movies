import React, { useEffect } from "react";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, menuToggle }) => {
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
            <Link to="/movies-popular" className="link">
              Movies
            </Link>
          </li>
          <li className="link-item">
            <Link to="/tv-shows-popular" className="link">
              TV Shows
            </Link>
          </li>
          <li className="link-item">
            <Link to="/people-popular" className="link">
              People
            </Link>
          </li>
        </ul>

        <div
          className={menuOpen ? "mobile-menu open" : "mobile-menu"}
          onClick={() => menuToggle(!menuOpen)}
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
