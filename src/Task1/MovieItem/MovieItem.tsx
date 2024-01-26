import React from 'react';

interface Props {
  id: string;
  title: string;
  handleTitleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
}

const MovieItem: React.FC<Props> = ({ title, id, handleTitleChange }) => {
  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        value={title}
        onChange={(e) => handleTitleChange(e, id)}
      />
      <button type='button' className='btn btn-outline-danger'>
        X
      </button>
    </div>
  );
};

export default MovieItem;
