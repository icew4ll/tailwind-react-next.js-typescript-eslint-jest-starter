import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'

interface Props {}

export const Axios: FC<Props> = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  // each time search changes, setResults []
  useEffect(() => {
    setResults([])
  }, [search])

  useEffect(() => {
    // initial state
    setLoading(true)
    setError(false)
    let cancel: any

    const fetchData = async () => {
      try {
        const url = 'test.json'
        const response = await axios.get(url)
        console.log(response.data)
        //axios
        //.get('test.json')
        //.then((res: any) => {
        //console.log(res.data)
        //})
        //.catch((err: any) => {
        //console.log(err)
        //})
      } catch (e) {
        console.log(error)
      }
    }

    if (search !== '') {
      fetchData()
    }

    //axios({
    //method: 'GET',
    //url: 'test.json',
    //cancelToken: new axios.CancelToken((c: any) => (cancel = c)),
    //})
    //.then((res: any) => {
    //setResults(res.data)
    //setLoading(false)
    ////console.log(res.data)
    ////console.log(res.data['1'].body)
    //})
    //.catch((e: any) => {
    //// catch cancel request errors and return due to intended behavior
    //if (axios.isCancel(e)) return
    //setError(true)
    //})
    //return () => cancel()

    // empty array will render only when component first renders
    // [results] array will render on every change to results
  }, [search])

  return (
    <div className="bg-gray-500">
      <h1>Async</h1>
      <input type="text" value={search} onChange={onChange} placeholder="Search meng" />
      <p>{search}</p>
      <ul>
        {results.map((verse: any) => {
          return <li key={verse.id}>{verse.body}</li>
        })}
      </ul>
    </div>
  )
}

export default Axios
//https://www.youtube.com/watch?v=HQq5Sod8AEk&t=273s
//https://github.com/nextapps-de/flexsearch
//https://github.com/angeloashmore/react-use-flexsearch
