import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';

const Search = () => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        setLoading(true)
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}`
        );
        const data = await response.json()
        setSearchResults(data.results)
        setLoading(false)
      }
    };
    fetchSearchResults()
  }, [query])

  return (
    <div className="container">
      <h1>Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {
            searchResults.length ? (
              searchResults.map((movie) =>
                <MovieCard
                  key={movie.id}
                   movie={movie}
                />)
            ) : (
              <p>No results found.</p>
            )}
        </div>
      )}
    </div>
  )
}

export default Search;
