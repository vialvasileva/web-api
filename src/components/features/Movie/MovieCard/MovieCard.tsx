import React from 'react';
import { MovieData } from '../../../../types';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: MovieData;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : `${import.meta.env.BASE_URL}images/icon.png`;

  return (
    <div className={styles['movie-result']}>
      <div className={styles['movie-poster']}>
        <img
          src={posterUrl}
          alt={movie.Title}
          className={styles.poster}
        />
      </div>
      <div className={styles['movie-info']}>
        <h2>{movie.Title}</h2>
        <div className={styles['movie-details']}>
          <p><strong>Year:</strong> <span>{movie.Year}</span></p>
          <p><strong>Genre:</strong> <span>{movie.Genre}</span></p>
          <p><strong>Director:</strong> <span>{movie.Director}</span></p>
          <p><strong>Actors:</strong> <span>{movie.Actors}</span></p>
          <p><strong>Plot:</strong> <span>{movie.Plot}</span></p>
          <p><strong>Rating IMDb:</strong> <span>{movie.imdbRating}</span></p>
          <p><strong>Duration:</strong> <span>{movie.Runtime}</span></p>
        </div>
      </div>
    </div>
  );
};