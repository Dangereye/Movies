import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className='movie-card'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
      <div className='content'>
        <h3 className='movie-title'>{movie.title}</h3>
        <p className='movie-date'>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default Movie;
