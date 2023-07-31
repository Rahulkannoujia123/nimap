// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchAPi = async () => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
    ).then((res) => res.json());
  };
  useEffect(() => {
   fetchAPi().then(res=>setPopularMovies(res?.results))
  }, []);

  return (
    <div>
      <h2>Home Page / Popular Movie Page</h2>
      {/* Display list of popular movies */}
      <ul>
        {popularMovies.length>0 && popularMovies.map(movie => (
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