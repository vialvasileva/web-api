import React from 'react';
import { AnimeData } from '../../../../types';
import { AnimeCard } from '../AnimeCard/AnimeCard';
import { Button } from '../../../common/Button/Button';
import { LoadingSpinner } from '../../../common/LoadingSpinner/LoadingSpinner';
import styles from './AnimeFact.module.css';

interface AnimeFactProps {
  animeData: AnimeData | null;
  loading: boolean;
  error: string;
  onGetRandom: () => void;
  onClear?: () => void;
}

export const AnimeFact: React.FC<AnimeFactProps> = ({
  animeData,
  loading,
  error,
  onGetRandom,
  onClear,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Button
          variant="secondary"
          size="large"
          onClick={onGetRandom}
          isLoading={loading}
          disabled={loading}
        >
          Get Random Fact
        </Button>
        
        {animeData && onClear && (
          <Button
            variant="primary"
            onClick={onClear}
            className={styles.clearButton}
          >
            Clear
          </Button>
        )}
      </div>

      {loading && <LoadingSpinner />}

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {animeData && <AnimeCard anime={animeData} />}

      <div className={styles.info}>
        <p>Click the button to get an interesting anime fact from our database!</p>
      </div>
    </div>
  );
};