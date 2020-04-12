import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react'

interface Props {}

export const Async: FC<Props> = () => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(search)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    console.log({ query })
    async function fetchData() {
      try {
        const response = await fetch('https://tools.keycdn.com/geo.json?host={18.205.6.240}')
        const json = await response.json()
        console.log({ json })
        //setResults(json.data.map)
      } catch (error) {}
    }

    if (query !== '') {
      fetchData()
    }
  }, [query])

  //useEffect(() => {
  //console.log({ query })
  //}, [query])

  return (
    <div className="bg-gray-500">
      <h1>Async</h1>
      <form onSubmit={onSubmit}>
        <input value={search} onChange={onChange} placeholder="Search meng" />
        <button type="submit">Search</button>
      </form>
      <p>{search}</p>
    </div>
  )
}

export default Async
//https://www.youtube.com/watch?v=HQq5Sod8AEk&t=273s
