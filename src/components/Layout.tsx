import { FC } from 'react'
import Head from 'next/head'
import Nav from './Nav'

type Props = {
  title?: string
}

const katex = '//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css'

const Layout: FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    {/* head */}
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href={katex} rel="stylesheet" />
    </Head>
    {/* root container */}
    <div className="bg-gray-800 text-white container flex max-w-screen-lg">
      <div className="flex-1">
        {/* Nav */}
        <Nav />
        {/* Children */}
        <div className="px-2">{children}</div>
        {/* Footer */}
        <footer className="rounded-md shadow-lg bg-green-600">
          <span>I'm here to stay (Footer)</span>
        </footer>
      </div>
    </div>
  </div>
)

export default Layout
