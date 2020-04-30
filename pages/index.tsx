import React, { FC } from 'react'
import Layout from '../src/components/Layout'
import { Pyth } from '../src/components/Pyth'

const Home: FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Pyth />
  </Layout>
)

export default Home
