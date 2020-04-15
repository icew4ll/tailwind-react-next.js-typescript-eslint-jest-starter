import React, { FC, useState } from 'react'
import FlexSearch from 'flexsearch'
import axios from 'axios'

interface Props {}

// 1) create index with preset "speed"
const index = new FlexSearch('speed')

// 2) add index
const url = 'test.json'
const fetchData = async (url: any) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (e) {
    console.log(e)
  }
}
//fetchData(url).then(console.log)

const indexer = async (db: any) => {
  const [id, body] = [db['0'].id, db['0'].body]
  index.add(id, body)
  console.log(index.length)
  console.log('found', index.search('beginning'))
  return [id, body]
  //db.map(async (item: any) => {
  //index.add(item.id, item.body)
  //})
}

const dowork = async () => {
  const db = await fetchData(url)
  const result = await indexer(db)
  return result
}
dowork().then(console.log)
console.log('outside', index.length)

// async search
//const fetchData = async () => {
//const search = async (query: any) => {
//const result = await index.search(query)
//console.log(result)
//}
//search('beginning')
//console.log(index.length)

const Flex: FC<Props> = () => {
  return <div>test</div>
}

export default Flex
