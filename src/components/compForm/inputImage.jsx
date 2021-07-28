import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="image"
          type="text"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
