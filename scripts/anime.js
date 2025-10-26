const API_RANDOM = 'https://api.jikan.moe/v4/random/anime';

const getFactBtn = document.getElementById('getFactBtn');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const factResultEl = document.getElementById('factResult');
const animeNameEl = document.getElementById('animeName');
const animeIdEl = document.getElementById('animeId');
const factTextEl = document.getElementById('factText');

function showLoading(show = true) { loadingEl.style.display = show ? 'block' : 'none'; }

function showError(msg) { errorEl.textContent = msg; errorEl.style.display = msg ? 'block' : 'none'; }

function showFact({ title, id, text }) {
  animeNameEl.textContent = title || '—';
  animeIdEl.textContent = id ? `MAL id: ${id}` : '';
  factTextEl.textContent = text || 'Нет описания.';
  factResultEl.style.display = 'block';
}

function hideFact() {
  factResultEl.style.display = 'none';
  animeNameEl.textContent = '';
  animeIdEl.textContent = '';
  factTextEl.textContent = '';
}

async function fetchJson(url, timeout = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) {
      const code = res.status;
      let bodyText = '';
      try { bodyText = await res.text(); } catch (e) { /*ignore*/ }
      const shortBody = bodyText ? ` — ответ: ${bodyText.slice(0,200)}` : '';
      const err = new Error(`HTTP ${code}${shortBody}`);
      err.status = code;
      throw err;
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

async function getRandomFact() {
  showError('');
  hideFact();
  showLoading(true);

  try {
    const json = await fetchJson(API_RANDOM, 10000);
    if (!json || !json.data) throw new Error('Пустой ответ от API');

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

    showFact({ title, id, text: synopsis });
  } catch (err) {
    console.error('getRandomFact error:', err);
    if (err.name === 'AbortError') {
      showError('The timeout has been exceeded. Please try again.');
    } else if (err.status === 429) {
      showError('Too many API requests (429). Please wait a minute and try again.');
    } else if (err.status === 404) {
      showError('Resource not found (404). Try later or use a different endpoint.');
    } else {
      showError('Error when receiving data: ' + (err.message || String(err)));
    }
  } finally {
    showLoading(false);
  }
}

getFactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getRandomFact();
});
