import React from 'react';
import { useQuery } from 'react-query';
import { fetchData } from '../api/FetchData';
import Movie from './Movie';

const MovieList = ({ title, endPoint }) => {
  const { status, data, error } = useQuery([title, endPoint], () =>
    fetchData(endPoint)
  );

  return (
    <section>
      <div className='container'>
        <h2>{title}</h2>
        {status === 'loading' && <div>Loading data..</div>}
        {status === 'error' && <div>Error:{error.message}</div>}
        {status === 'success' && (
          <div className='movie-list'>
            {data.results.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieList;
