import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovie(novoFilme) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, novoFilme],
    });
  }

  filtrarFilmes() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    const arrayDeFilmes = movies
      .filter((movie) => {
        if (bookmarkedOnly) {
          return movie.bookmarked === true;
        } return movie;
      }).filter((movie) => (movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase()))
      || movie.subtitle
        .toLowerCase()
        .includes(searchText.toLowerCase())
      || movie.storyline
        .toLowerCase()
        .includes(searchText.toLowerCase()))
      .filter((movie) => movie.genre.includes(selectedGenre));
    return arrayDeFilmes;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filtrarFilmes() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
