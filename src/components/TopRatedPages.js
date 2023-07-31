// src/components/TopRatedPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TopRatedPages.css'

const TopRatedPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    // Fetch top-rated movies from the API
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1'
        );
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      {/* Display list of top-rated movies */}
      <ul>
        {topRatedMovies.map(movie => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedPage;
