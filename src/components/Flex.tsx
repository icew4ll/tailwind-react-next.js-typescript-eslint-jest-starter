import React, { FC, useState } from 'react'
import FlexSearch from 'flexsearch'
import axios from 'axios'

interface Props {}

const Flex: FC<Props> = () => {
  // 1) create index with preset "speed"
  const index = new FlexSearch('speed')

  // 2) add index
  const fetchData = async (url: any) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
  //fetchData(url).then(console.log)

  const search = async (db: any, query: any) => {
    try {
      db.map(async (item: any) => {
        const [id, body] = [item.id, item.body]
        index.add(id, body)
      })
      return index.search(query)
    } catch (e) {
      console.log(e)
    }
  }

  const find = async (db: any, arr: any) => {
    try {
      let a: any = []
      arr.map(async (item: any) => {
        const i = item - 1
        a.push(db[i].body)
      })
      return a
    } catch (e) {
      console.log(e)
    }
  }

  const filter = async () => {
    try {
      const url = 'test.json'
      const query = 'God'
      const db = await fetchData(url)
      const result = await search(db, query)
      const out = await find(db, result)
      return out
    } catch (e) {
      console.log(e)
    }
  }

  //dowork().then(console.log)
  //dowork().then((res: any) => console.log(res))
  filter().then((res: any) => console.log(res))

  return <div>test</div>
}

export default Flex
