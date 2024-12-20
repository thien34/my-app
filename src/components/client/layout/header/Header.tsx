import Logo from './Logo'
import Nav from './Nav'
import HeaderR from './HeaderR'
import { cn } from '@/lib/utils'

const logo = {
  src: '/logo.png',
  alt: 'AnhVanHoa'
}
const navs = [
  {
    label: 'Mac',
    href: '/danh-muc/mac'
  },
  {
    label: 'iPhone',
    href: '/danh-muc/iphone'
  },
  {
    label: 'iPad',
    href: '/danh-muc/ipad'
  },
  {
    label: 'Phụ kiện',
    href: '/danh-muc/phu-kien'
  }
]

const Header = () => {
  return (
    <header className='border-b'>
      <div className={cn('max-w-screen-xl mx-auto py-3 grid grid-cols-2 items-center justify-between px-4')}>
        <div className='flex items-center gap-14'>
          <Logo logo={logo} />
          <Nav navs={navs} />
        </div>
        <HeaderR />
      </div>
    </header>
  )
}

export default Header
