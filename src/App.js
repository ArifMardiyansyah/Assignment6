import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1cb244d3";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("spiderman");

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  const fetchMovies = async (search) => {
    const response = await fetch(`${API_URL}&s=${search}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSearch = (searchSearch) => {
    setSearch(searchSearch);
  };

  return (
    <div className="app">
      <Header title="Movie App" onSearch={handleSearch} />
      <h2 className="recommendation-title">Movie Recommendation</h2>
      <div className="movies-container">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;