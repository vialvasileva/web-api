import React from 'react';
import { AnimeFact } from '../../components/features/Anime/AnimeFact/AnimeFact';
import { AnimeCard } from '../../components/features/Anime/AnimeCard/AnimeCard';
import { LoadingSpinner } from '../../components/common/LoadingSpinner/LoadingSpinner';
import { Button } from '../../components/common/Button/Button';
import { useAnimeFact } from '../../hooks/useAnimeFact';
import styles from './AnimePage.module.css';

const AnimePage: React.FC = () => {
  const { animeData, loading, error, getRandomAnime, clearAnime } = useAnimeFact();

  return (
    <div className={styles['anime-section']}>
      <div className={styles['anime-card']}>
        <div className={styles['action-buttons']}>
          <Button
            onClick={getRandomAnime}
            variant="secondary"
            size="large"
            isLoading={loading}
            disabled={loading}
            className={styles['fetch-button']}
          >
            Get a random fact
          </Button>
          
          {animeData && (
            <Button
              onClick={clearAnime}
              variant="primary"
              className={styles['clear-button']}
            >
              Clear
            </Button>
          )}
        </div>

        {loading && (
          <div className={styles.loading}>
            <LoadingSpinner />
            <p>Loading...</p>
          </div>
        )}

        {error && <div className={styles.error}>{error}</div>}

        {animeData && (
          <div className={styles['fact-result']}>
            <AnimeCard anime={animeData} />
          </div>
        )}
      </div>

      <div className={styles['info-box']}>
        <p>Click the button to get an interesting anime fact from our database!</p>
      </div>
    </div>
  );
};

export default AnimePage;