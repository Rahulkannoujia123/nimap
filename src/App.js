// src/App.js
import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./index.css"
import "./App.css"
import TopRatedPage from "./components/TopRatedPages";
import UpcomingMoviePage from "./components/UpcomingMoviePage";
import SingleMovieDetailPage from "./components/SingleMovieDetailPage";
import SearchedMoviePage from "./components/SearchedMoviePage";
const App = () => {
  return (
    <>
      <BrowserRouter>
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
          <Route exact path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingMoviePage />} />
          <Route path="/movie/:movieId" element={<SingleMovieDetailPage />} />
          <Route path="/sear" element={<SearchedMoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;