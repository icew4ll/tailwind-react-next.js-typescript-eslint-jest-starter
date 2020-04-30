import React from 'react'
import { useRouter } from 'next/router'

interface Props {
  children: any
  href: any
}

export default function ActiveLink({ children, href }: Props) {
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  const style = {
    color: router.pathname === href ? 'black' : '#27568c',
  }

  // get url params
  // console.log(router.query)

  return (
    <div className="bg-green-700 px-1">
      <a href={href} onClick={handleClick} style={style}>
        {children}
      </a>
    </div>
  )
}
