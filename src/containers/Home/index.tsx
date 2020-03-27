import React from 'react'
import { NextPage } from 'next'
import Search from '../../components/search'

const Home: NextPage = () => {
  const { SITE_NAME } = process.env

  return (
    <div>
      <Search />
    </div>
  )
}

export default Home
