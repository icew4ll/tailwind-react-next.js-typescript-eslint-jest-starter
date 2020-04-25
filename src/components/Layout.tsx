import { FC } from 'react'
import Head from 'next/head'
import Nav from './Nav'

type Props = {
  title?: string
}

const katex = '//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css'

const Layout: FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div className="px-2 bg-gray-800 text-white">
    {/* head */}
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href={katex} rel="stylesheet" />
    </Head>
    {/* Nav */}
    <Nav />
    {/* Children */}
    {children}
    {/* Footer */}
    <footer className="bg-gray-500">
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
