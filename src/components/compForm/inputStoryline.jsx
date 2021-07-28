import React from 'react';

class InputStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    )
  }
}

export default InputStoryline;
