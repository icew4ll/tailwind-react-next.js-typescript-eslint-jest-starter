//import { useState } from 'react'
import ActiveLink from './ActiveLink'
import { useRouter } from 'next/router'

const links = [
  { key: 0, url: '/', name: 'Home' },
  { key: 1, url: '/about', name: 'About' },
]

export default function ClassName() {
  //const [active, setActive] = useState('CAD')
  const router = useRouter()

  let navCSS = 'flex flex-no-wrap rounded-md shadow-lg'

  return (
    <header>
      <nav className={navCSS}>
        {links.map((link) => (
          <div key={link.key} className="px-1">
            <ActiveLink href={link.url}>{link.name}</ActiveLink>
          </div>
        ))}
      </nav>
      <p>{router.query.test}</p>
    </header>
  )
}
