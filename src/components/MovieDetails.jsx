import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    if (movie) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        .then(res => res.json())
        .then(data => setCredits(data));
    }
  }, [movie]);

  return (
    <div className="movie-details-card">
      {movie ? (
        <div className="movie-details-content">
          <div className="movie-poster">
            <img 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt={movie.title} 
              className="poster-image" 
            />
          </div>
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p><strong>Rating:</strong> {movie.vote_average}/10</p>
            <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
          </div>
 
          {credits && (
            <div className="cast-container">
              <h2>Top Cast</h2>
              <div className="cast-list">
                {credits.cast.slice(0, 6).map((cast) => (
                  <div key={cast.id} className="cast-card">
                    <img 
                      src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} 
                      alt={cast.name} 
                      className="cast-image" 
                    />
                    <div className="cast-info">
                      <p className="cast-name">{cast.name}</p>
                      <p className="cast-character">as {cast.character}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;