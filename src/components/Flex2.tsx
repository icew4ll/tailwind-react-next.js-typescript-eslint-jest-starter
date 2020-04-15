import React, { FC, useState } from 'react'
import FlexSearch from 'flexsearch'

interface Props {}

// 1) create index with preset "speed"
const index = new FlexSearch('speed')

// 2) add index
index.add(10025, 'John Doe')
index.add(10024, 'Jane Doe')
index.add(10023, 'Jane Drow')

// 3) Perform search
//console.log(index.search('Jane'))
// limit results to 10
//console.log(index.search('Jane'), 10)

// async search
//const fetchData = async () => {
const search = async (query: any) => {
  const result = await index.search(query)
  console.log(result)
}
search('jane')

const Flex: FC<Props> = () => {
  return <div>test</div>
}

export default Flex
