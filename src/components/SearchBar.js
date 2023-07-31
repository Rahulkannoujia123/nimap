// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
