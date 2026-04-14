import { useState } from 'react'
import type { Movie } from '../types/movie'

// localStorage에서 즐겨찾기 목록을 불러오는 함수
const loadFavorites = (): Movie[] => {
  const saved = localStorage.getItem('favorites')
  return saved ? JSON.parse(saved) : []
}

// localStorage에 즐겨찾기 목록을 저장하는 함수
const saveFavorites = (favorites: Movie[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

function useFavorites() {
  // 초기값으로 localStorage에서 불러온 즐겨찾기 목록 사용
  const [favorites, setFavorites] = useState<Movie[]>(loadFavorites)

  // 즐겨찾기 추가/제거 토글 함수
  const toggleFavorite = (movie: Movie) => {
    const isAlreadyFavorite = favorites.some((f) => f.id === movie.id)

    const updated = isAlreadyFavorite
      ? favorites.filter((f) => f.id !== movie.id) // 이미 있으면 제거
      : [...favorites, movie] // 없으면 추가

    setFavorites(updated)
    saveFavorites(updated)
  }

  // 특정 영화가 즐겨찾기에 있는지 확인하는 함수
  const isFavorite = (id: number): boolean => {
    return favorites.some((f) => f.id === id)
  }

  return { favorites, toggleFavorite, isFavorite }
}

export default useFavorites