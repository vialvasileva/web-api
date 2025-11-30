import { useState, KeyboardEvent } from 'react';
import '../styles/movie.css';

interface MovieData {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
  Runtime: string;
  Poster: string;
}

const API_KEY = 'eca31c6a';

export default function MoviePage() {
  const [movieInput, setMovieInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  const fetchMovie = async (title: string) => {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`;

    try {
      setLoading(true);
      setError('');
      setMovieData(null);

      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'False') {
        setError(data.Error);
        return;
      }

      setMovieData(data);
    } catch (err) {
      setError('An error occurred while receiving the data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const title = movieInput.trim();
    if (title) {
      fetchMovie(title);
    } else {
      setError('Please enter the name of the movie.');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-section">
      <div className="search-box">
        <input
          type="text"
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter the name of the movie (in English)..."
          className="input-field"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Get information
        </button>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {movieData && (
        <div className="movie-result">
          <div className="movie-poster">
            <img
              src={movieData.Poster !== 'N/A' ? movieData.Poster : '/images/icon.png'}
              alt={movieData.Title}
            />
          </div>
          <div className="movie-info">
            <h2>{movieData.Title}</h2>
            <div className="movie-details">
              <p><strong>Year:</strong> <span>{movieData.Year}</span></p>
              <p><strong>Genre:</strong> <span>{movieData.Genre}</span></p>
              <p><strong>Director:</strong> <span>{movieData.Director}</span></p>
              <p><strong>Actors:</strong> <span>{movieData.Actors}</span></p>
              <p><strong>Plot:</strong> <span>{movieData.Plot}</span></p>
              <p><strong>Rating IMDb:</strong> <span>{movieData.imdbRating}</span></p>
              <p><strong>Duration:</strong> <span>{movieData.Runtime}</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}