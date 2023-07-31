// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
  }
  const fetchAPi = async () => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
    ).then((res) => res.json());
  };
  useEffect(() => {
   fetchAPi().then(res=>setPopularMovies(res?.results))
  }, []);


  return (
    <div className='container home'>
      <h2>Home Page / Popular Movie Page</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <ul className='movies'>
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
