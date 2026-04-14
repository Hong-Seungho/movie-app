import type { Movie } from '../types/movie'
import { IMAGE_BASE_URL } from '../api/tmdb'

// 영화 카드 컴포넌트가 부모에게 받는 데이터 타입 정의
interface Props {
  movie: Movie
  onClick: (id: number) => void
  onFavoriteToggle: (movie: Movie) => void // 즐겨찾기 토글 함수
  isFavorite: boolean // 현재 즐겨찾기 여부
}

function MovieCard({ movie, onClick, onFavoriteToggle, isFavorite }: Props) {
  // 포스터 이미지가 없을 때 보여줄 대체 이미지
  const posterUrl = movie.poster_path
    ? IMAGE_BASE_URL + movie.poster_path
    : 'https://via.placeholder.com/500x750?text=No+Image'

  // 평점을 소수점 한 자리로 반올림
  const rating = movie.vote_average.toFixed(1)

  return (
    <div className="movie-card" onClick={() => onClick(movie.id)}>
      <img src={posterUrl} alt={movie.title} />
      {/* 즐겨찾기 버튼 - 카드 클릭과 겹치지 않게 이벤트 전파 차단 */}
      <button
        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          onFavoriteToggle(movie)
        }}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {/* 개봉연도만 앞 4자리만 잘라서 보여줌 */}
        <p>{movie.release_date?.slice(0, 4)}년</p>
        <span>⭐ {rating}</span>
      </div>
    </div>
  )
}

export default MovieCard