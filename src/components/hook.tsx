import React, { useState } from 'react' // we need this to make JSX compile

export const Hook = () => {
  const [search, setSearch] = useState('')

  const onSubmit(e: any) => {
    e.preventDefault();
    console.log(search)
  }

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={onSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
export default Hook
