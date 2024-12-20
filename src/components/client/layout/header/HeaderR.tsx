import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Search from './Search'
import { LibraryBig } from 'lucide-react'
import Account from './Account'

const HeaderR = () => {
  return (
    <div className='flex items-center justify-end gap-2'>
      <Link href={'/bai-viet'}>
        <Button className='rounded-full px-3 py-2 shadow-none' variant={'outline'}>
          <LibraryBig />
          <span className='font-normal'>Bài viết</span>
        </Button>
      </Link>
      <Search />
      <Account />
      <Link href={'/dang-nhap'}>
        <Button className='rounded-full border border-primary py-1.5 font-medium'>Đăng nhập</Button>
      </Link>
    </div>
  )
}

export default HeaderR
