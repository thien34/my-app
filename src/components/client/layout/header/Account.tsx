import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'

const menus = [
  {
    title: 'Tài khoản',
    href: '/tai-khoan'
  },
  {
    title: 'Đơn hàng',
    href: '/don-hang'
  }
]

const Account = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='size-9'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='border-none rounded-xl' align='end'>
        {menus.map(menu => (
          <Link className='w-full' href={menu.href} key={menu.href}>
            <DropdownMenuItem>{menu.title}</DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Account
