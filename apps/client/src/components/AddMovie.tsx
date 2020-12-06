import { useMutation } from '@apollo/client';
import { IMovie } from 'movie-model';
import React, { useState } from 'react';
import { ADD_MOVIE, MOVIES } from '../queries';
import './AddMovie.css';

const IMAGE_URL =
  'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR74,0,630,1200_AL_.jpg';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const [addMovie] = useMutation<IMovie>(ADD_MOVIE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMovie({
      variables: { name, genre, year, image: IMAGE_URL },
      refetchQueries: [{ query: MOVIES }],
    });
  };

  return (
    <div className='addMovie'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          required
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='genre'>Genre</label>
        <input
          type='text'
          required
          name='genre'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor='year'>Year</label>
        <input
          type='text'
          required
          name='year'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type='submit'>Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
