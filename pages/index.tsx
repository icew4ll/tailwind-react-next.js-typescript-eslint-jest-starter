import React, { FC } from 'react'
import Layout from '../src/components/Layout'
import Link from 'next/link'
import { Input } from '../src/components/input'
import { Pyth } from '../src/components/Pyth'
import { Img } from '../src/components/Img'
import { Kjv } from '../src/components/Kjv'
import { UseState } from '../src/components/UseState'
import Async from '../src/components/Async';
import { Axios } from '../src/components/Axios';

const Home: FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Axios />
  </Layout>
)

export default Home
