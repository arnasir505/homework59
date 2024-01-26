import React from 'react';

interface Props {
  jokeText: string
}

const Joke: React.FC<Props> = ({jokeText}) => {
  return <h4>{jokeText}</h4>;
};

export default Joke;
