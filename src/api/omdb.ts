import { API_CONFIG } from './index';
import { MovieData } from '../types';

export const fetchMovie = async (title: string): Promise<MovieData | null> => {
  const url = `${API_CONFIG.OMDb_BASE_URL}?t=${encodeURIComponent(title)}&apikey=${API_CONFIG.OMDb_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'False') {
      throw new Error(data.Error);
    }

    return data;
  } catch (error) {
    throw error;
  }
};