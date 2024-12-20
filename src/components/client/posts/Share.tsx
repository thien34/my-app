'use client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Facebook, Link2 } from 'lucide-react'

const Share = () => {
  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
    }
    toast('🚀 Đã sao chép liên kết!', {
      id: 'welcome-toast',
      duration: Infinity,
      description: 'Bạn đã sao chép liên kết thành công! Hãy chia sẻ với bạn bè để họ cũng biết đến bài viết này nhé!'
    })
  }
  return (
    <div className='fixed left-8 top-0 flex h-screen flex-col items-center justify-center gap-y-3'>
      <Button onClick={handleCopy} variant={'secondary'} className='rounded-full p-3 hover:text-primary'>
        <Link2 className='!size-5' />
      </Button>
      <Button onClick={handleCopy} variant={'secondary'} className='rounded-full p-3 hover:text-primary'>
        <Facebook className='!size-5' />
      </Button>
    </div>
  )
}

export default Share
