import React from 'react';
import './Movie.css';

interface Props {
  name: string;
  genre: string;
  year: number;
  image: string;
}

const Movie: React.FC<Props> = ({ name, genre, year, image }) => {
  return (
    <div className='movie'>
      <h2>{name}</h2>
      <img src={image} alt={name} className='movie__poster' />
      <div className='movie__meta'>
        {genre} - {year}
      </div>
    </div>
  );
};

export default Movie;
