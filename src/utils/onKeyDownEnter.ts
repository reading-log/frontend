export const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
  if (event.key === 'Enter') {
    event.preventDefault() // Enter 키의 기본 동작을 막음
    // 원하는 동작 수행
  }
}
