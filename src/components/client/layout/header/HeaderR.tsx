import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Search from './Search'
import { LibraryBig } from 'lucide-react'
import Account from './Account'

const HeaderR = () => {
  return (
    <div className='flex justify-end gap-2 items-center'>
      <Link href={'/bai-viet'}>
        <Button className='py-2 px-3 rounded-full shadow-none' variant={'outline'}>
          <LibraryBig />
          <span className='font-normal'>Bài viết</span>
        </Button>
      </Link>
      <Search />
      <Account />
      <Link href={'/dang-nhap'}>
        <Button className='border border-primary rounded-full py-1.5 font-medium'>Đăng nhập</Button>
      </Link>
    </div>
  )
}

export default HeaderR
