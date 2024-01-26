import React, { useEffect } from 'react';

interface Props {
  getJoke: () => void;
  noRerender: string;
}

const GetJokeButton: React.FC<Props> = React.memo(
  ({ getJoke, noRerender }) => {
    console.log('[Button] render');

    useEffect(() => {
      console.log('[Button] mounted/updated', noRerender);
    }, []);

    return (
      <button type='button' className='btn btn-primary mt-2' onClick={getJoke}>
        Random Jokes
      </button>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.noRerender === nextProps.noRerender;
  }
);

export default GetJokeButton;
