import React, { useState } from 'react';
import Movie from '../components/Movie';
import { MovieProps } from '../model/model';
import './Movies.css';

const INITIAL_MOVIES: MovieProps[] = [
  {
    id: 1,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
  {
    id: 2,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
  {
    id: 3,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
  {
    id: 4,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
  {
    id: 5,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
  {
    id: 6,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
  {
    id: 7,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
  {
    id: 8,
    name: 'John Wick',
    genre: 'Action',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg',
  },
];

const Movies = () => {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  return (
    <div className='movies'>
      {movies.map((movie) => (
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
