import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'

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
    //console.log({ query })
    const fetchData = async () => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/users/3'
        const response = await fetch(url)
        const json = await response.json()
        setResults(json.address.city)
      } catch (error) {}
    }

    if (query !== '') {
      fetchData()
    }
  }, [query])

  return (
    <div className="bg-gray-500">
      <h1>Async</h1>
      <form onSubmit={onSubmit}>
        <input value={search} onChange={onChange} placeholder="Search meng" />
        <button type="submit">Search</button>
      </form>
      <p>{search}</p>
      <p>{results}</p>
    </div>
  )
}

export default Async
//https://www.youtube.com/watch?v=HQq5Sod8AEk&t=273s
