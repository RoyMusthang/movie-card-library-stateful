import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    )
  }
}

export default Rating;
