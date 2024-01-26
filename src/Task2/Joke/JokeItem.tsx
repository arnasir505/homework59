import React from 'react';

interface Props {
  jokeText: string;
}

const JokeItem: React.FC<Props> = ({ jokeText }) => {
  return (
    <div>
      <h5>{jokeText}</h5>
      <hr />
    </div>
  );
};

export default JokeItem;
