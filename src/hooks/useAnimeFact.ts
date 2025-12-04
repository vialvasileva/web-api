import { useState, useCallback } from 'react';
import { AnimeData } from '../types';
import { fetchRandomAnime } from '../api/jikan';

export const useAnimeFact = () => {
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const getRandomAnime = useCallback(async () => {
    setError('');
    setAnimeData(null);
    setLoading(true);

    try {
      const data = await fetchRandomAnime(10000);
      setAnimeData(data);
    } catch (err: any) {
      console.error('getRandomAnime error:', err);
      
      if (err.name === 'AbortError') {
        setError('The timeout has been exceeded. Please try again.');
      } else if (err.status === 429) {
        setError('Too many API requests (429). Please wait a minute and try again.');
      } else if (err.status === 404) {
        setError('Resource not found (404). Try later or use a different endpoint.');
      } else {
        setError('Error when receiving data: ' + (err.message || String(err)));
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const clearAnime = useCallback(() => {
    setAnimeData(null);
    setError('');
  }, []);

  return {
    animeData,
    loading,
    error,
    getRandomAnime,
    clearAnime,
  };
};