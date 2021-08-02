import React from 'react';
import PropTypes from 'prop-types';

class InputTemplete extends React.Component {
  render() {
    const { text, name, value, handleChange, type = 'text' } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${(name === 'imagePath') ? 'image' : name}-input-label` }
      >
        {`${text}`}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
          data-testid={ `${(name === 'imagePath') ? 'image' : name}-input` }
        />
      </label>
    );
  }
}

InputTemplete.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputTemplete;
