import Header from '@/components/client/layout/header'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className='relative z-10'>
        <Header />
      </div>
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
