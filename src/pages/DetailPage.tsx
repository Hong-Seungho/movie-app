import { useState, useEffect } from 'react'
import type { Movie } from '../types/movie'
import { getMovieDetail, IMAGE_BASE_URL } from '../api/tmdb'
import { useParams } from 'react-router-dom'

function DetailPage() {
  // 영화 상세 데이터 상태
  const [movie, setMovie] = useState<Movie | null>(null)
  // 로딩 중인지 여부 상태
  const [loading, setLoading] = useState(true)
  // 에러 메시지 상태
  const [error, setError] = useState('')

  // URL에서 영화 id를 읽어옴
  const { id } = useParams()
  const movieId = Number(id)

  // 컴포넌트가 처음 화면에 나타날 때 영화 정보 불러오기
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetail(movieId)
        setMovie(data)
      } catch (err) {
        setError('영화 정보를 불러오는 데 실패했어요.')
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, []) // 빈 배열 = 처음 한 번만 실행

  // 포스터 이미지 URL 생성
  const posterUrl = movie?.poster_path
    ? IMAGE_BASE_URL + movie.poster_path
    : 'https://via.placeholder.com/500x750?text=No+Image'

  if (loading) return <p className="message">불러오는 중...</p>
  if (error) return <p className="message error">{error}</p>
  if (!movie) return null

  return (
    <div className="detail-page">
      <button onClick={() => window.history.back()}>← 뒤로가기</button>
      <div className="detail-content">
        <img src={posterUrl} alt={movie.title} />
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <p>개봉일: {movie.release_date}</p>
          <p>평점: ⭐ {movie.vote_average.toFixed(1)}</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage