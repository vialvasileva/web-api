import { useState, useCallback } from 'react';
import { MovieData } from '../types';
import { fetchMovie } from '../api/omdb';

export const useMovieSearch = () => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const searchMovie = useCallback(async (title: string) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError('Please enter the name of the movie.');
      return;
    }

    setLoading(true);
    setError('');
    setMovieData(null);

    try {
      const data = await fetchMovie(trimmedTitle);
      if (data) {
        setMovieData(data);
      } else {
        setError('Movie not found');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while receiving the data.');
    } finally {
      setLoading(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setMovieData(null);
    setError('');
  }, []);

  return {
    movieData,
    loading,
    error,
    searchMovie,
    clearSearch,
  };
};