import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'

interface Props {}

export const Axios: FC<Props> = () => {
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
      axios
        .get('test.json')
        .then((res: any) => {
          console.log(res.data)
        })
        .catch((err: any) => {
          console.log(err)
        })
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

export default Axios
//https://www.youtube.com/watch?v=HQq5Sod8AEk&t=273s
