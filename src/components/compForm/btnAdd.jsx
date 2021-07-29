import React from 'react';

class BtnAdd extends React.Component {
  render() {
    return (
      <button
        data-testid="send-button"
        type="submit"
      >
        Adicionar filme
      </button>
    );
  }
}

export default BtnAdd;
