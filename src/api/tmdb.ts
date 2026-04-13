import type { Movie, MovieResponse } from '../types/movie'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const searchMovies = async (query: string): Promise<MovieResponse> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`
  )
  const data = await response.json()
  return data
}

export const getMovieDetail = async (id: number): Promise<Movie> => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
  )
  const data = await response.json()
  return data
}

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'