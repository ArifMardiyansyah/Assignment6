import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default Movie;