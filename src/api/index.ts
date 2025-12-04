export const API_CONFIG = {
  OMDb_API_KEY: 'eca31c6a',
  OMDb_BASE_URL: 'https://www.omdbapi.com/',
  JIKAN_BASE_URL: 'https://api.jikan.moe/v4',
} as const;

export type ApiResponse<T> = {
  data: T;
  error?: string;
  loading: boolean;
};