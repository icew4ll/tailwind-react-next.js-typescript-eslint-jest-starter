import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import elasticlunr from 'elasticlunr'

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
    axios({
      method: 'GET',
      url: 'test.json',
      cancelToken: new axios.CancelToken((c: any) => (cancel = c)),
    })
      .then((res: any) => {
        let index = elasticlunr(function (this: any) {
          this.addField('book')
          this.addField('chapter')
          this.addField('verse')
          this.addField('body')
          this.setRef('id')
        })

        let arr: any = []
        res.data.forEach((item: any) => {
          arr.push(item)
          index.addDoc(item)
        })

        let results = index.search('beginning', {})
        //console.log(index.documentStore.docs['1'])
        //console.log(index.documentsStore)
        console.log(results)
        //setResults(index.documentsStore)
        //setLoading(false)
        //console.log(res.data)
        //console.log(res.data['1'].body)
      })
      .catch((e: any) => {
        // catch cancel request errors and return due to intended behavior
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
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
