import React, { useEffect } from 'react';
import Movie from '../components/Movie';
import './Movies.css';
import { IMovie } from 'movie-model';
import { useLazyQuery } from '@apollo/client';
import { MOVIES } from '../queries';

const Movies = () => {
  const [getMovies, { loading, data }] = useLazyQuery<{
    movies: IMovie[];
  }>(MOVIES);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='movies'>
      {data?.movies.map((movie) => (
        <Movie
          key={movie.id}
          name={movie.name}
          genre={movie.genre}
          year={movie.year}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default Movies;
