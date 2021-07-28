import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubTitle;
