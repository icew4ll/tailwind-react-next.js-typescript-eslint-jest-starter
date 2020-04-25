//import { useState } from 'react'
import ActiveLink from './ActiveLink'

const links = [
  { key: 0, url: '/', name: 'Home' },
  { key: 1, url: '/about', name: 'About' },
]

export default function ClassName() {
  //const [active, setActive] = useState('CAD')

  let navCSS = 'flex flex-no-wrap rounded-md shadow-lg bg-green-600'

  return (
    <header>
      <nav className={navCSS}>
        {links.map((link) => (
          <div key={link.key} className="px-1">
            <ActiveLink href={link.url}>{link.name}</ActiveLink>
          </div>
        ))}
      </nav>
    </header>
  )
}
