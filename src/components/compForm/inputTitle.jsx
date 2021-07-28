import React from 'react';

class InputTitle extends React.Component {
  rende() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default InputTitle;
