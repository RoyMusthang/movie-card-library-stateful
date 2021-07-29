import React from 'react';
import InputTitle from './compForm/inputTitle';
import InputSubTitle from './compForm/inputSubTitle';
import InputImage from './compForm/inputImage';
import InputRating from './compForm/inputRating';
import InputStoryline from './compForm/inputStoryline';
import SelectGenre from './compForm/selectGenre';
import BtnAdd from './compForm/btnAdd';

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
  }

  handleChange = (elem) => {
    this.setState({
      [elem.target.name]: elem.target.value,
    });
  }

  handleDeregue = (mama) => {
    mama.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleDeregue }>
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubTitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <InputRating value={ rating } onChange={ this.handleChange } />
        <InputStoryline value={ storyline } onChange={ this.handleChange } />
        <SelectGenre value={ genre } onChange={ this.handleChange } />
        <BtnAdd />
      </form>
    );
  }
}

export default AddMovie;
