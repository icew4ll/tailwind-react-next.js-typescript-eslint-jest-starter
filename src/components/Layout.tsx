import React, { FC } from 'react'

//interface Props {}

//export const Input: FC<Props> = () => {

//import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
