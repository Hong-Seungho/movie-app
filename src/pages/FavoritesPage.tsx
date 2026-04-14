import { useNavigate } from 'react-router-dom'
import useFavorites from '../hooks/useFavorites'
import MovieCard from '../components/MovieCard'

function FavoritesPage() {
  const navigate = useNavigate()
  // 즐겨찾기 훅에서 목록, 토글, 확인 함수 가져오기
  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  return (
    <div className="home-page">
      <h1 style={{ color: '#e50914' }}>즐겨찾기</h1>

      {/* 즐겨찾기가 비어있을 때 */}
      {favorites.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p className="message">아직 즐겨찾기한 영화가 없어요.</p>
          <button
            onClick={() => navigate('/')}
            style={{
              marginTop: '1rem',
              padding: '10px 24px',
              background: '#e50914',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            영화 검색하러 가기
          </button>
        </div>
      )}

      {/* 즐겨찾기 목록 */}
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={(id) => navigate(`/movie/${id}`)}
            onFavoriteToggle={toggleFavorite}
            isFavorite={isFavorite(movie.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage