import Link from 'next/link'

type Props = {
  navs: {
    label: string
    href: string
  }[]
}

const Nav = ({ navs }: Props) => {
  return (
    <nav>
      <ul className='flex items-center justify-center gap-6'>
        {navs.map(nav => (
          <li key={nav.href} className='text-sm underline-offset-2 transition-all hover:text-primary hover:underline'>
            <Link href={nav.href}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
