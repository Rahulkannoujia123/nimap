// src/components/SearchedMoviePage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory to handle navigation
import './styles/SearchedMoviePage.css'; // Import the custom CSS file

const SearchedMoviePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigate();

  const handleSearch = async () => {
    // Fetch searched movies from the API
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchQuery}&page=1`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMovieClick = (movieId) => {
    // Redirect to the Single Movie Detail Page when a movie is clicked
    navigation.push(`/movie/${movieId}`)
  };

  return (
    <div className="searched-movie-page">
      <h2>Search Movies</h2>
      <div className="search-bar">
        <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search for movies" />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Display list of searched movies */}
      <div className="movie-list">
        {searchResults.map((movie) => (
          <div className="movie-card" key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchedMoviePage;