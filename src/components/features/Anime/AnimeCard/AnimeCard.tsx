import React from 'react';
import { AnimeData } from '../../../../types';
import styles from './AnimeCard.module.css';

interface AnimeCardProps {
  anime: AnimeData;
}

export const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className={styles['fact-card']}>
      <div className={styles['fact-header']}>
        <h2>{anime.title}</h2>
        {anime.id && (
          <span className={styles['anime-id']}>MAL id: {anime.id}</span>
        )}
      </div>
      <div className={styles['fact-content']}>
        <p>{anime.text}</p>
      </div>
    </div>
  );
};