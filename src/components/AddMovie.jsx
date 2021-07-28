import React from 'react';
import InputTitle from './compForm/inputTitle';
import InputSubTitle from './compForm/inputSubTitle';
import InputImage from './compForm/inputImage';
import InputRating from './compForm/inputRating';
import InputStoryline from './compForm/inputStoryline';
import SelectGenre from './compForm/selectGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } />
        <InputSubTitle value={ subtitle } />
        <InputImage />
        <InputRating />
        <InputStoryline />
        <SelectGenre />
      </form>
    );
  }
}

export default AddMovie;
