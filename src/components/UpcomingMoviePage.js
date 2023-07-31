// src/components/UpcomingMoviePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UpcomingMoviePage.css'; // Import the custom CSS file

const UpcomingMoviePage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // Fetch upcoming movies from the API
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1'
        );
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div className="upcoming-movie-page">
      <h2>Upcoming Movies</h2>
      {/* Display list of upcoming movies */}
      <div className="movie-list">
        {upcomingMovies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMoviePage;
