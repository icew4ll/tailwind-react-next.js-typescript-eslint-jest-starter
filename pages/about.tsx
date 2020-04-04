import React, { FC } from 'react'
import Layout from '../src/components/Layout'
import Link from 'next/link'

const About: FC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>hello Next.js 👋</h1>
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </Layout>
)

export default About
