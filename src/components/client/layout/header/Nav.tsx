import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Nav {
  label: string
  href: string
}

type Props = {
  navs: Nav[]
}

const Nav = ({ navs }: Props) => {
  return (
    <nav className='inline-flex'>
      <ul className='flex items-center justify-center gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur'>
        {navs.map(nav => (
          <li
            key={nav.href}
            className={cn(
              'cursor-pointer rounded-full px-2.5 py-1.5 text-sm font-semibold text-white/70 transition-all hover:bg-white/10 hover:text-white md:px-4 lg:px-5',
              nav.label === 'Contact' && 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
            )}
          >
            <Link href={nav.href}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
