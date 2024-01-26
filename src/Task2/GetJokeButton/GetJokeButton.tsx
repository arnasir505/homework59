import React, { useEffect } from 'react';

interface Props {
  getJoke: () => void;
  noRender: string;
}

const GetJokeButton: React.FC<Props> = React.memo(
  ({ getJoke, noRender }) => {
    console.log('[Button] render');

    useEffect(() => {
      console.log('[Button] mounted/updated');
    }, []);

    return (
      <button type='button' className='btn btn-primary mt-2' onClick={getJoke}>
        Random Jokes
      </button>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.noRender === nextProps.noRender;
  }
);

export default GetJokeButton;
