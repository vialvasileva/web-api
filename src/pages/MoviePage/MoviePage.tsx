import React from 'react';
import { MovieSearch } from '../../components/features/Movie/MovieSearch/MovieSearch';
import { MovieCard } from '../../components/features/Movie/MovieCard/MovieCard';
import { LoadingSpinner } from '../../components/common/LoadingSpinner/LoadingSpinner';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import styles from './MoviePage.module.css';

const MoviePage: React.FC = () => {
  const { movieData, loading, error, searchMovie } = useMovieSearch();

  return (
    <div className={styles['search-section']}>
      <MovieSearch 
        onSearch={searchMovie}
        isLoading={loading}
      />
      
      {loading && (
        <div className={styles.loading}>
          <LoadingSpinner />
          <p>Loading...</p>
        </div>
      )}

      {error && <div className={styles.error}>{error}</div>}

      {movieData && <MovieCard movie={movieData} />}
    </div>
  );
};

export default MoviePage;