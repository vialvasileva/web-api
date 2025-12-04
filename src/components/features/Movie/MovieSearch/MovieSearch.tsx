import React, { useState, KeyboardEvent } from 'react';
import { Button } from '../../../common/Button/Button';
import styles from './MovieSearch.module.css';

interface MovieSearchProps {
  onSearch: (title: string) => void;
  isLoading: boolean;
}

export const MovieSearch: React.FC<MovieSearchProps> = ({ onSearch, isLoading }) => {
  const [movieInput, setMovieInput] = useState('');

  const handleSearch = () => {
    const title = movieInput.trim();
    if (title) {
      onSearch(title);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles['search-box']}>
      <input
        type="text"
        value={movieInput}
        onChange={(e) => setMovieInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter the name of the movie (in English)..."
        className={styles['input-field']}
        disabled={isLoading}
      />
      <Button
        onClick={handleSearch}
        variant="primary"
        isLoading={isLoading}
        disabled={isLoading || !movieInput.trim()}
      >
        Get information
      </Button>
    </div>
  );
};