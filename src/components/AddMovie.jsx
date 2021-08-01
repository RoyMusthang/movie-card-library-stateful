import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './compForm/inputTitle';
import InputSubTitle from './compForm/inputSubTitle';
import InputImage from './compForm/inputImage';
import InputRating from './compForm/inputRating';
import InputStoryline from './compForm/inputStoryline';
import SelectGenre from './compForm/selectGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubTitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <InputRating value={ Number(rating) } onChange={ this.handleChange } />
        <InputStoryline value={ storyline } onChange={ this.handleChange } />
        <SelectGenre genero={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => this.handleClick(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
