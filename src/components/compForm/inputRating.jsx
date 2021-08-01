import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          id="rating-input"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
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
