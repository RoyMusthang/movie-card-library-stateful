import React from 'react';

class InputTitle extends React.Component {
  rende() {
    const { value } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ value }
        />
      </label>
    );
  }
}

export default InputTitle;
