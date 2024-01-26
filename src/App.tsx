import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MovieForm from './Task1/MovieForm/MovieForm';
import { Movie } from './types';
import MovieItem from './Task1/MovieItem/MovieItem';

function App() {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: uuidv4(),
      title: 'Oppenheimer'
    },
    {
      id: uuidv4(),
      title: 'Game of Thrones'
    },
    {
      id: uuidv4(),
      title: 'Star Wars'
    }
  ]);

  return (
    <div className='container'>
      <div className='p-5 w-50 mx-auto'>
        <MovieForm />
        <p className='my-2'>To watch list:</p>
        {movies.map(movie => (<MovieItem title={movie.title} id={movie.id}/>))}
      </div>
    </div>
  );
}

export default App;
