import React, { FC } from 'react'
import Layout from '../src/components/Layout'
import Link from 'next/link'
import { Input } from '../src/components/input'
import Latex from 'react-latex'

const Home: FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Sup Next.js 👋</h1>
    <Input />
    <h3>
      <Latex>What is $(3\times 4) \div (5-3)$</Latex>
    </h3>
  </Layout>
)

export default Home
