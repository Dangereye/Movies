import React from 'react';
import { MdLocalMovies } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <div className='logo'>
          <MdLocalMovies />
          <span>Movies</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
