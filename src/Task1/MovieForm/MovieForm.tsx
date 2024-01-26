import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Movie } from '../../types';

interface Props {
  onMovieFormSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    movie: Movie
  ) => void;
}

const MovieForm: React.FC<Props> = ({ onMovieFormSubmit }) => {
  const [movieInput, setMovieInput] = useState({
    id: uuidv4(),
    title: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className='d-flex' onSubmit={(e) => onMovieFormSubmit(e, movieInput)}>
      <input
        type='text'
        className='form-control'
        name='title'
        value={movieInput.title}
        onChange={handleChange}
        required
      />
      <button type='submit' className='btn btn-primary ms-2'>
        Add
      </button>
    </form>
  );
};

export default MovieForm;
