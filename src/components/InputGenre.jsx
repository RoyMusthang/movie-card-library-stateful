import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          name="genre"
          value={ genre }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputGenre;
