import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          value={ Number(value) }
          onChange={ onChange }
          min="0"
          max="5"
          step="0.1"
          type="number"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

export default InputRating;
