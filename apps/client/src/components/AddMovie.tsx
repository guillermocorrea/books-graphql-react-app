import React from 'react';
import './AddMovie.css';

const AddMovie = () => {
  return (
    <div className='addMovie'>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' required name='name' />
        <label htmlFor='genre'>Genre</label>
        <input type='text' required name='genre' />
        <label htmlFor='year'>Year</label>
        <input type='text' required name='year' />
        <button type='submit'>Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
