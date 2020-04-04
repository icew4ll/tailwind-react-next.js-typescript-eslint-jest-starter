import React, { FC } from 'react'
import Layout from '../src/components/Layout'
import Link from 'next/link'

const Home: FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default Home
