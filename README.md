# 🎬 영화 검색 앱

TMDB API를 활용한 영화 검색 포트폴리오 프로젝트입니다.

## 🔗 링크
- **라이브 데모**: https://movie-app-teal-rho.vercel.app/
- **TMDB API**: https://www.themoviedb.org

## ✨ 주요 기능
- 영화 검색 (debounce 적용으로 자동 검색)
- 영화 상세 정보 조회
- 즐겨찾기 추가/제거 (localStorage 저장)
- 즐겨찾기 목록 페이지

## 🛠 기술 스택
- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **API**: TMDB API
- **스타일링**: CSS

## 📁 프로젝트 구조

```
src
├── api
│   └── tmdb.ts        # TMDB API 호출 함수
├── components
│   ├── MovieCard.tsx  # 영화 카드 컴포넌트
│   └── SearchBar.tsx  # 검색창 컴포넌트
├── hooks
│   ├── useDebounce.ts # debounce 커스텀 훅
│   └── useFavorites.ts # 즐겨찾기 커스텀 훅
├── pages
│   ├── HomePage.tsx   # 메인 검색 페이지
│   ├── DetailPage.tsx # 영화 상세 페이지
│   └── FavoritesPage.tsx # 즐겨찾기 페이지
└── types
    └── movie.ts       # 영화 타입 정의
```

## 💡 기술적 고민
- **debounce 적용**: 검색어 입력 시 API 호출 횟수를 줄이기 위해 0.5초 debounce 적용
- **커스텀 훅 분리**: 즐겨찾기 로직을 `useFavorites` 훅으로 분리해 재사용성 향상
- **TypeScript 활용**: TMDB API 응답 타입을 인터페이스로 정의해 타입 안정성 확보

## 🚀 로컬 실행 방법
1. 저장소 클론
```bash
   git clone https://github.com/Hong-Seungho/movie-app.git
```
2. 패키지 설치
```bash
   npm install
```
3. 환경변수 설정
```bash
   # .env 파일 생성 후 TMDB API 키 입력
   VITE_TMDB_API_KEY=your_api_key
```
4. 개발 서버 실행
```bash
   npm run dev
```