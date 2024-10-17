import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function Upcoming() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
  }, [])

  return (
    <div className="container">
      <h1 className="my-4">Upcoming Movies</h1>
      <div className="movie-grid">
        {
        movies.map((movie) => (
          <MovieCard
           key={movie.id} 
           movie={movie} 
           />
        ))
        }
      </div>
    </div>
  )
}

export default Upcoming;
