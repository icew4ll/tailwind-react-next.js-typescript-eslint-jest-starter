//import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ActiveLink from './ActiveLink'

const links = [
  { key: 0, url: '/', name: 'Home' },
  { key: 1, url: '/about', name: 'About' },
]

export default function ClassName() {
  //const [active, setActive] = useState('CAD')

  const router = useRouter()
  //console.log(router.pathname)
  let color = router.pathname === '/' ? 'green' : 'red'
  console.log(color)

  let aCSS = `bg-${color}-800 rounded-md px-2 shadow-md shadow-inner`
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
