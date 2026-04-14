import { useState } from 'react'
import type { Movie } from '../types/movie'
import { searchMovies } from '../api/tmdb'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  // 검색창에 입력된 텍스트 상태
  const [query, setQuery] = useState('')
  // 검색 결과 영화 목록 상태
  const [movies, setMovies] = useState<Movie[]>([])
  // 로딩 중인지 여부 상태
  const [loading, setLoading] = useState(false)
  // 에러 메시지 상태
  const [error, setError] = useState('')

  // 검색 실행 함수
  const handleSearch = async () => {
    // 검색어가 비어있으면 실행하지 않음
    if (!query.trim()) return

    setLoading(true)
    setError('')

    try {
      const data = await searchMovies(query)
      setMovies(data.results)
    } catch (err) {
      setError('영화를 불러오는 데 실패했어요. 다시 시도해주세요.')
    } finally {
      // 성공이든 실패든 로딩 상태 해제
      setLoading(false)
    }
  }

  const navigate = useNavigate()

  // 영화 카드 클릭 시 상세 페이지로 이동
  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`)
  }

  return (
    <div className="home-page">
      <h1>영화 검색</h1>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />

      {/* 로딩 중일 때 */}
      {loading && <p className="message">검색 중...</p>}

      {/* 에러가 있을 때 */}
      {error && <p className="message error">{error}</p>}

      {/* 검색 결과가 없을 때 */}
      {!loading && !error && movies.length === 0 && query && (
        <p className="message">검색 결과가 없어요.</p>
      )}

      {/* 영화 목록 */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={handleMovieClick}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage