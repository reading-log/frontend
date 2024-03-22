import { useState } from 'react'

const Filtering = () => {
  const [select, setSelect] = useState('new')

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value)
  }
  return (
    <>
      <select value={select} onChange={handleSelect}>
        <option value="new">최신순</option>
        <option value="popular">인기순</option>
      </select>
    </>
  )
}

export default Filtering
