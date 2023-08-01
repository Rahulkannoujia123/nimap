// src/components/SingleMovieDetailPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to get the movie_id from the URL
import './styles/SingleMovieDetailPage.css'; // Import the custom CSS file

const SingleMovieDetailPage = () => {
  const { movieId } = useParams(); // Get the movie_id from the URL parameter
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    // Fetch details of the single movie from the API
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        setMovieDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-movie-detail-page">
      <div className="movie-info">
        <h2>{movieDetail.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt={movieDetail.title} />
        <p>{movieDetail.release_date}</p>
        <p>Rating: {movieDetail.vote_average}</p>
        <p>{movieDetail.overview}</p>
      </div>
    </div>
  );
};

export default SingleMovieDetailPage;