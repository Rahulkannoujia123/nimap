import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchedMoviePage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  // Your code to fetch and display movies that match the searchQuery goes here
  return <div>Searched Movie Page for Search Query: {searchQuery}</div>;
};

export default SearchedMoviePage;