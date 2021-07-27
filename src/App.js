import React from 'react';
import Header from './components/Header';
import './App.css';
import data from './data';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
      <SearchBar />
    </div>
  );
}

export default App;
