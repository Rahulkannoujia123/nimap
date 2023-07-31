// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies from API
    // Use the URL provided in the API Details section
    // Remember to append your API key to the URL
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
      .then(response => {
        setPopularMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Home Page / Popular Movie Page</h2>
      {/* Display list of popular movies */}
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

// Implement similar components for TopRatedPage, UpcomingMoviePage, SingleMovieDetailPage, and SearchedMoviePage using the provided API URLs.
