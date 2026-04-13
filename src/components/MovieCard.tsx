import type { Movie } from '../types/movie'
import { IMAGE_BASE_URL } from '../api/tmdb'

// 영화 카드 컴포넌트가 부모에게 받는 데이터 타입 정의
interface Props {
  movie: Movie // 영화 한 편의 데이터
  onClick: (id: number) => void // 카드 클릭 시 부모에게 영화 id 전달
}

function MovieCard({ movie, onClick }: Props) {
  // 포스터 이미지가 없을 때 보여줄 대체 이미지
  const posterUrl = movie.poster_path
    ? IMAGE_BASE_URL + movie.poster_path
    : 'https://via.placeholder.com/500x750?text=No+Image'

  // 평점을 소수점 한 자리로 반올림
  const rating = movie.vote_average.toFixed(1)

  return (
    <div className="movie-card" onClick={() => onClick(movie.id)}>
      <img src={posterUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {/* 값이 있을 경우 개봉연도만 앞 4자리만 잘라서 보여줌 */}
        <p>{movie.release_date?.slice(0, 4)}년</p>
        <span>⭐ {rating}</span>
      </div>
    </div>
  )
}

export default MovieCard