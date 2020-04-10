import React, { FC } from 'react'
import Layout from '../src/components/Layout'
import Link from 'next/link'
import { Input } from '../src/components/input'
import { Pyth } from '../src/components/Pyth'
import { Img } from '../src/components/Img'
import { Kjv } from '../src/components/Kjv'

const Home: FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Sup Next.js 👋</h1>
    <Kjv />
    <Pyth />
    <Img />
  </Layout>
)

export default Home
