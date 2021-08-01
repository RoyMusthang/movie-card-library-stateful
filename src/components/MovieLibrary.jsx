import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    const { name, value } = target;
    const { movies } = this.props;
    const newList = movies.filter((movie) => (
      movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)));
    this.setState({
      [name]: value,
      movies: newList,
    });
  };

  onBookmarkedChange = ({ target }) => {
    const { name, checked } = target;
    const { movies } = this.props;
    const newList = (checked)
      ? movies.filter(({ bookmarked }) => bookmarked)
      : movies;
    this.setState({
      [name]: checked,
      movies: newList,
    });
  };

  onSelectedGenreChange = ({ target }) => {
    const { name, value } = target;
    const { movies } = this.props;
    const newList = (value)
      ? movies.filter(({ genre }) => genre === value)
      : movies;
    this.setState({
      [name]: value,
      movies: newList,
    });
  };

  onClick = (movie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  };

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
