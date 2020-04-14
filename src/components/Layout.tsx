import React, { FC } from 'react'

//interface Props {}

//export const Input: FC<Props> = () => {

//import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const links = [
  { key: 0, url: '/', name: 'Home' },
  { key: 1, url: '/about', name: 'About' },
]

const Layout: FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div className="px-2 bg-purple-500">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet" />
    </Head>
    <header>
      <nav className="flex flex-no-wrap bg-green-500">
        {links.map((link) => (
          <div key={link.key} className="px-1">
            <Link href={link.url}>
              <a>{link.name}</a>
            </Link>
          </div>
        ))}
      </nav>
    </header>
    {children}
    <footer className="bg-gray-500">
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
