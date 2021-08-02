import React from 'react';
import PropTypes from 'prop-types';
import InputTemplete from './InputTemplete';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTemplete
          text="Título"
          name="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <InputTemplete
          text="Subtítulo"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <InputTemplete
          text="Imagem"
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <InputTemplete
          text="Sinopse"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <InputTemplete
          text="Avaliação"
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
          type="number"
        />
        <InputGenre genre={ genre } handleChange={ this.handleChange } />
        <button type="submit" onClick={ this.onSubmit } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
