import React from 'react';
import { MdLocalMovies } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <Link to='/' className='logo'>
          <MdLocalMovies />
          <span>Movies</span>
        </Link>
        <ul className='links'>
          <li className='link-item'>
            <Link to='/movies' className='link'>
              Movies
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/tv-shows' className='link'>
              TV Shows
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/people' className='link'>
              People
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
