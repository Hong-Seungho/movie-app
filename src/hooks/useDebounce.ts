import { useState, useEffect } from 'react'

function useDebounce<T>(value: T, delay: number): T {
  // 디바운스된 값 상태
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // delay ms 후에 값을 업데이트하는 타이머 설정
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // 새로운 값이 들어오면 이전 타이머를 취소
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

export default useDebounce