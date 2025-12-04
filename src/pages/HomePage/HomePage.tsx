import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button/Button';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <div className={`${styles['feature-card']} ${styles['card-movie']}`}>
          <div className={styles['feature-icon']}>🎥</div>
          <h2>Movie search</h2>
          <p>Get detailed information about any movie: release year, genre, IMDb rating, cast, and poster</p>
          <Link to="/movie" className={styles.link}>
            <Button variant="primary">
              Search for movies
            </Button>
          </Link>
        </div>

        <div className={`${styles['feature-card']} ${styles['card-anime']}`}>
          <div className={styles['feature-icon']}>🎌</div>
          <h2>Facts about anime</h2>
          <p>Learn interesting facts about various anime. Every time, a new random fact!</p>
          <Link to="/anime" className={styles.link}>
            <Button variant="secondary">
              Find out the fact
            </Button>
          </Link>
        </div>
      </div>

      <div className={styles['info-section']}>
        <h3>About the project</h3>
        <p>This website uses three public APIs to provide information about movies and anime:</p>
        <br />
        <ul>
          <li><strong>OMDb API</strong> — movie database</li>
          <li><strong>Movies DB API</strong> — movie posters</li>
          <li><strong>Jikan API</strong> — facts about anime</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;