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

  let active = router.pathname === href ? 'red' : 'green'
  let color = `bg-${active}-800 rounded-md px-2 shadow-md shadow-inner`

  return (
    <a href={href} onClick={handleClick} className={color}>
      {children}
    </a>
  )
}
