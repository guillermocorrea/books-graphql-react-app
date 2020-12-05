import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './containers/Movies';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Movies />
        <AddMovie />
      </div>
      <Footer />
    </div>
  );
}

export default App;
