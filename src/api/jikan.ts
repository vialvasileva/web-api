import { AnimeData } from '../types';
import { API_CONFIG } from './index';

export const fetchRandomAnime = async (timeout = 10000): Promise<AnimeData> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${API_CONFIG.JIKAN_BASE_URL}/random/anime`, {
      signal: controller.signal,
    });
    
    clearTimeout(timer);

    if (!response.ok) {
      const code = response.status;
      let bodyText = '';
      
      try {
        bodyText = await response.text();
      } catch {
        // ignore
      }
      
      const shortBody = bodyText ? ` — response: ${bodyText.slice(0, 200)}` : '';
      const error = new Error(`HTTP ${code}${shortBody}`) as any;
      error.status = code;
      throw error;
    }

    const json = await response.json();

    if (!json || !json.data) {
      throw new Error('Empty response from API');
    }

    const data = json.data;
    const title = data.title || data.title_english || data.title_japanese || '—';
    const id = data.mal_id || data.id || '';
    
    let synopsis = (data.synopsis || '').trim();
    
    if (!synopsis) {
      const type = data.type || '—';
      const episodes = data.episodes != null ? data.episodes : '—';
      const score = data.score != null ? data.score : '—';
      synopsis = `Type: ${type}. Episodes: ${episodes}. MAL Rating: ${score}.`;
    } else if (synopsis.length > 800) {
      synopsis = synopsis.slice(0, 780) + '…';
    }

    return { title, id, text: synopsis };
  } finally {
    clearTimeout(timer);
  }
};