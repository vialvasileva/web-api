import { Link } from 'react-router-dom';
import '../styles/index.css';

export default function HomePage() {
  return (
    <>
      <div className="features">
        <div className="feature-card card-movie">
          <div className="feature-icon">🎥</div>
          <h2>Movie search</h2>
          <p>Get detailed information about any movie: release year, genre, IMDb rating, cast, and poster</p>
          <Link to="/movie" className="btn btn-primary">Search for movies</Link>
        </div>

        <div className="feature-card card-anime">
          <div className="feature-icon">🎌</div>
          <h2>Facts about anime</h2>
          <p>Learn interesting facts about various anime. Every time, a new random fact!</p>
          <Link to="/anime" className="btn btn-secondary">Find out the fact</Link>
        </div>
      </div>

      <div className="info-section">
        <h3>About the project</h3>
        <p>This website uses three public APIs to provide information about movies and anime:</p><br />
        <ul>
          <li><strong>OMDb API</strong> — movie database</li>
          <li><strong>Movies DB API</strong> — movie posters</li>
          <li><strong>Jikan API</strong> — facts about anime</li>
        </ul>
      </div>
    </>
  );
}