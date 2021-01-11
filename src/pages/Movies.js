import React, { useState } from 'react';
import Categories from '../components/Categories';
import MovieList from '../components/MovieList';

const Movies = () => {
  const categories = [
    { name: 'Popular', endPoint: '/movie/popular' },
    { name: 'Now Playing', endPoint: '/movie/now_playing' },
    { name: 'Upcoming', endPoint: '/movie/upcoming' },
    { name: 'Top Rated', endPoint: '/movie/top_rated' },
  ];

  const [category, setCategory] = useState(categories[0]);
  return (
    <>
      <Categories categories={categories} setCategory={setCategory} />
      <MovieList
        title={`${category.name} Movies`}
        endPoint={category.endPoint}
      />
    </>
  );
};

export default Movies;
