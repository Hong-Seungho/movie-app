import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    // BrowserRouter — URL 변경을 감지하고 관리하는 최상위 컴포넌트
    <BrowserRouter>
      <Routes>
        {/* / 주소로 접속하면 HomePage 보여줌 */}
        <Route path="/" element={<HomePage />} />
        {/* /movie/123 처럼 영화 id가 포함된 주소면 DetailPage 보여줌 */}
        <Route path="/movie/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App