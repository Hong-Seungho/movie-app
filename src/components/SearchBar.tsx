// 검색창 컴포넌트가 부모에게 받는 데이터 타입 정의
interface Props {
    query: string // 검색창에 입력된 텍스트
    onQueryChange: (value: string) => void // 텍스트가 바뀔 때 부모에게 알려주는 함수
    onSearch: () => void // 검색을 실행하는 함수
  }
  
  function SearchBar({ query, onQueryChange, onSearch }: Props) {
    // 엔터 키를 눌렀을 때 검색 실행
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSearch()
      }
    }
  
    return (
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)} // 입력값 변경 시 부모에게 전달
          onKeyDown={handleKeyDown}
          placeholder="영화 제목을 검색하세요..."
        />
        <button onClick={onSearch}>검색</button>
      </div>
    )
  }
  
  export default SearchBar