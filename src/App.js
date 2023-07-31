// src/App.js
import React from 'react';
import { BrowserRouter as Router,  Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopRatedPage from './components/TopRatedPages';
import UpcomingMoviePage from './components/UpcomingMoviePage';
import SingleMovieDetailPage from './components/SingleMovieDetailPage';
import SearchedMoviePage from './components/SearchedMoviePage';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming Movies</Link>
          </li>
          {/* Add a search input field here and implement the search functionality */}
        </ul>
      </nav>
    <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/top-rated" component={TopRatedPage} />
        <Route path="/upcoming" component={UpcomingMoviePage} />
        <Route path="/movie/:movieId" component={SingleMovieDetailPage} />
        <Route path="/search" component={SearchedMoviePage} />
        </Routes>
    </Router>
  );
};

export default App;
