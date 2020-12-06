import React from 'react';
import './Header.css';
import searchIcon from './search.svg';

const Header = () => {
  return (
    <div className='topnav'>
      <a href='/' className='topnav__logo'>
        Movies app
      </a>
      <div className='topnav__search-container'>
        <form>
          <a href='#add-movie'>Add Movies</a>
          <input type='text' placeholder='Search...' name='search' />
          <button type='submit'>
            <img src={searchIcon} alt='Search' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
