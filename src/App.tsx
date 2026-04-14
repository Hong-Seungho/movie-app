import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* / 주소로 접속하면 HomePage 보여줌 */}
        <Route path="/" element={<HomePage />} />
        {/* /movie/123 처럼 영화 id가 포함된 주소면 DetailPage 보여줌 */}
        <Route path="/movie/:id" element={<DetailPage />} />
        {/* /favorites 주소로 접속하면 FavoritesPage 보여줌 */}
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App