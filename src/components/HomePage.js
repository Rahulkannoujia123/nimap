
import React, { useState,useEffect } from 'react';
import axios from 'axios';
// Import the CSS file for styling
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchAPi = async () => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
    ).then((res) => res.json());
  };
  useEffect(() => {
   fetchAPi().then(res=>setPopularMovies(res?.results))
  }, []);
 
  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchQuery}&page=1`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    
    <div className="home-page">
      <h1>Popular Movies</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <ul>
      
        {popularMovies.length>0 && popularMovies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
              </>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default HomePage;
