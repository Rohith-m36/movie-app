import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <img className="card-img-top" src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">Rating: {movie.vote_average}/10</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;