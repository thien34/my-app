import Nav from './Nav'

// const logo = {
//   src: '/logo.png',
//   alt: 'luoicode'
// }

const navs = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Projects',
    href: '/project'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

const Header = () => {
  return (
    <header className='fixed top-3 flex w-full items-center justify-center overflow-x-hidden'>
      <Nav navs={navs} />
    </header>
    // <header className=''>
    //   <div className='max-w-screen-xl mx-auto grid grid-cols-2 items-center justify-between px-4 py-3'>
    //     <div className='flex items-center gap-14'>
    //       {/* <Logo logo={logo} /> */}
    //       <Nav navs={navs} />
    //     </div>
    //     {/* <HeaderR /> */}
    //   </div>
    // </header>
  )
}

export default Header
