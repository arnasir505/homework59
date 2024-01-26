import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MovieForm from './Task1/MovieForm/MovieForm';
import { Joke, Movie } from './types';
import MovieItem from './Task1/MovieItem/MovieItem';
import JokeItem from './Task2/Joke/JokeItem';
import GetJokeButton from './Task2/GetJokeButton/GetJokeButton';
import { url } from './constants';

function App() {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: uuidv4(),
      title: 'Oppenheimer',
    },
    {
      id: uuidv4(),
      title: 'Game of Thrones',
    },
    {
      id: uuidv4(),
      title: 'Star Wars',
    },
  ]);

  const [movieInput, setMovieInput] = useState({
    title: '',
  });

  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieInput({ title: e.target.value });
  };

  const addMovie = (e: React.FormEvent<HTMLFormElement>, movie: Movie) => {
    e.preventDefault();
    setMovies((prevState) => [...prevState, movie]);
  };

  const changeMovieTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setMovies((prevState) => {
      const foundIndex = prevState.findIndex((movie) => movie.id === id);
      const movie = prevState[foundIndex];
      movie.title = e.target.value;
      return [...prevState];
    });
  };

  const removeMovie = (id: string) => {
    setMovies((prevState) => prevState.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  const getRandomJoke = async () => {
    const promises: Promise<Response>[] = [];
    const jokesArray: Joke[] = [];
    for (let i = 0; i < 5; i++) {
      promises.push(fetch(url));
    }
    const responses = await Promise.all(promises);
    for (const response of responses) {
      const jokeData = await response.json();
      const joke: Joke = {
        id: jokeData.id,
        text: jokeData.value,
      };
      jokesArray.push(joke);
    }
    setJokes(jokesArray);
  };

  return (
    <div className='container'>
      <div className='p-5 mt-5 w-50 mx-auto border border-black border-2 rounded'>
        <MovieForm
          onMovieFormSubmit={addMovie}
          movieInput={movieInput}
          handleFormChange={handleFormChange}
        />
        <p className='my-2'>To watch list:</p>
        {movies.map((movie) => (
          <MovieItem
            title={movie.title}
            id={movie.id}
            handleTitleChange={changeMovieTitle}
            removeMovie={removeMovie}
            key={movie.id}
          />
        ))}
      </div>
      <div className='p-5 mt-5 w-50 mx-auto border border-black border-2 rounded text-center'>
        <p className='fs-5'>Random Chuck Norris jokes:</p>
        {jokes.map((joke) => (
          <JokeItem jokeText={joke.text} key={joke.id} />
        ))}
        <GetJokeButton getJoke={getRandomJoke} noRender={url} />
      </div>
    </div>
  );
}

export default App;
