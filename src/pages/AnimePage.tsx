import { useState } from 'react';
import '../styles/anime.css';

interface AnimeData {
  title: string;
  id: string;
  text: string;
}

const API_RANDOM = 'https://api.jikan.moe/v4/random/anime';

async function fetchJson(url: string, timeout = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    
    if (!res.ok) {
      const code = res.status;
      let bodyText = '';
      try { 
        bodyText = await res.text(); 
      } catch (e) { 
        // ignore
      }
      const shortBody = bodyText ? ` — ответ: ${bodyText.slice(0, 200)}` : '';
      const err = new Error(`HTTP ${code}${shortBody}`) as any;
      err.status = code;
      throw err;
    }
    
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

export default function AnimePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);

  const getRandomFact = async () => {
    setError('');
    setAnimeData(null);
    setLoading(true);

    try {
      const json = await fetchJson(API_RANDOM, 10000);
      if (!json || !json.data) {
        throw new Error('Пустой ответ от API');
      }

      const d = json.data;
      const title = d.title || d.title_english || d.title_japanese || '—';
      const id = d.mal_id || d.id || '';
      
      let synopsis = (d.synopsis || '').trim();
      if (!synopsis) {
        const type = d.type || '—';
        const episodes = d.episodes != null ? d.episodes : '—';
        const score = d.score != null ? d.score : '—';
        synopsis = `Тип: ${type}. Эпизодов: ${episodes}. Рейтинг MAL: ${score}.`;
      } else if (synopsis.length > 800) {
        synopsis = synopsis.slice(0, 780) + '…';
      }

      setAnimeData({ title, id, text: synopsis });
    } catch (err: any) {
      console.error('getRandomFact error:', err);
      
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
  };

  return (
    <div className="anime-section">
      <div className="anime-card">
        <button onClick={getRandomFact} className="btn btn-secondary btn-large">
          Get a random fact
        </button>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {error && <div className="error">{error}</div>}

        {animeData && (
          <div className="fact-result">
            <div className="fact-card">
              <div className="fact-header">
                <h2>{animeData.title}</h2>
                {animeData.id && (
                  <span className="anime-id">MAL id: {animeData.id}</span>
                )}
              </div>
              <div className="fact-content">
                <p>{animeData.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="info-box">
        <p>Click the button to get an interesting anime fact from our database!</p>
      </div>
    </div>
  );
}