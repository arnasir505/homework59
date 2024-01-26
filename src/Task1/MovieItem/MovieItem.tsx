import React from 'react';

interface Props {
  id: string;
  title: string;
}

const MovieItem: React.FC<Props> = ({ title, id }) => {
  return (
    <div className='card my-2'>
      <div className='card-body d-flex justify-content-between'>
        <h5 className='m-0'>{title}</h5>
        <button type='button' className='btn-close'></button>
      </div>
    </div>
  );
};

export default MovieItem;
