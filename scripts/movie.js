const apiKey = 'eca31c6a'; 

const movieInput = document.getElementById('movieInput');
const searchBtn = document.getElementById('searchBtn');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const movieResult = document.getElementById('movieResult');

const posterImg = document.getElementById('posterImg');
const movieTitle = document.getElementById('movieTitle');
const movieYear = document.getElementById('movieYear');
const movieGenre = document.getElementById('movieGenre');
const movieDirector = document.getElementById('movieDirector');
const movieActors = document.getElementById('movieActors');
const moviePlot = document.getElementById('moviePlot');
const movieRating = document.getElementById('movieRating');
const movieRuntime = document.getElementById('movieRuntime');

// Функция для получения данных о фильме
async function fetchMovie(title) {
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

  try {
    loadingDiv.style.display = 'flex';
    errorDiv.style.display = 'none';
    movieResult.style.display = 'none';

    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'False') {
      errorDiv.textContent = data.Error;
      errorDiv.style.display = 'block';
      return;
    }

    // Заполняем данные на странице
    posterImg.src = data.Poster !== 'N/A' ? data.Poster : 'images/icon.png';
    posterImg.alt = data.Title;

    movieTitle.textContent = data.Title;
    movieYear.textContent = data.Year;
    movieGenre.textContent = data.Genre;
    movieDirector.textContent = data.Director;
    movieActors.textContent = data.Actors;
    moviePlot.textContent = data.Plot;
    movieRating.textContent = data.imdbRating;
    movieRuntime.textContent = data.Runtime;

    movieResult.style.display = 'flex';
  } catch (error) {
    errorDiv.textContent = 'An error occurred while receiving the data.';
    errorDiv.style.display = 'block';
  } finally {
    loadingDiv.style.display = 'none';
  }
}

// Событие по клику на кнопку поиска
searchBtn.addEventListener('click', () => {
  const title = movieInput.value.trim();
  if (title) {
    fetchMovie(title);
  } else {
    errorDiv.textContent = 'Please enter the name of the movie.';
    errorDiv.style.display = 'block';
  }
});

// Событие при нажатии Enter в input
movieInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});
