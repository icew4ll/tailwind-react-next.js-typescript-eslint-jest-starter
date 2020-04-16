import React, { FC, useState } from 'react'
import { useQuery } from 'react-query'

interface Props {}

const Query: FC<Props> = () => {
  const [page, setPage] = useState(1)

  const url = 'https://swapi.co/api/people/'
  const fetchData = async () => await (await fetch(url)).json()

  const { status, data, error } = useQuery('starwars')

  if (status === 'loading') return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      <br />
      {data.results.map((element: any, i: any) => {
        return <p key={i}>{element.name}</p>
      })}
      <span>🌨️</span>
    </div>
  )
}

export default Query
