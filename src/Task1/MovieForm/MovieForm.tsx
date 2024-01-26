import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Movie } from '../../types';

interface Props {
  onMovieFormSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    movie: Movie
  ) => void;
  movieInput: { title: string };
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MovieForm: React.FC<Props> = ({
  onMovieFormSubmit,
  movieInput,
  handleFormChange,
}) => {
  return (
    <form
      className='d-flex'
      onSubmit={(e) => onMovieFormSubmit(e, { ...movieInput, id: uuidv4() })}
    >
      <input
        type='text'
        className='form-control'
        name='title'
        placeholder='Enter movie name'
        value={movieInput.title}
        onChange={handleFormChange}
        required
      />
      <button type='submit' className='btn btn-primary ms-2'>
        Add
      </button>
    </form>
  );
};

export default MovieForm;
