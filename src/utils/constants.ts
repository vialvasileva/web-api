export const APP_INFO = {
  name: 'MovieSite',
  description: 'Movie Site - information about the movie and the search poster, as well as various facts about anime!',
  version: '1.0.0',
  author: 'Student team',
  year: '2025',
} as const;

export const NAV_LINKS = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/movie', label: 'Movies', icon: '🎬' },
  { path: '/anime', label: 'Anime', icon: '🎌' },
] as const;

export const API_INFO = [
  { name: 'OMDb API', description: 'Movie database' },
  { name: 'Movies DB API', description: 'Movie posters' },
  { name: 'Jikan API', description: 'Facts about anime' },
] as const;

export const FEATURES = [
  {
    id: 'movie',
    title: 'Movie Search',
    description: 'Get detailed information about any movie: release year, genre, IMDb rating, cast, and poster',
    icon: '🎥',
    path: '/movie',
    color: 'primary',
  },
  {
    id: 'anime',
    title: 'Anime Facts',
    description: 'Learn interesting facts about various anime. Every time, a new random fact!',
    icon: '🎌',
    path: '/anime',
    color: 'secondary',
  },
] as const;

export const MOVIE_PLACEHOLDER = 'Enter the name of the movie (in English)...';