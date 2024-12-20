'use client'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import { Facebook, Link2 } from 'lucide-react'

const Share = () => {
  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
    }
    toast({
      title: 'Đã sao chép liên kết',
      description: 'Liên kết đã được sao chép vào bộ nhớ tạm'
    })
  }
  return (
    <div className='h-screen fixed left-8 flex flex-col gap-y-3 top-0 justify-center items-center'>
      <Button onClick={handleCopy} variant={'secondary'} className='p-3 hover:text-primary rounded-full'>
        <Link2 className='!size-5' />
      </Button>
      <Button onClick={handleCopy} variant={'secondary'} className='p-3 hover:text-primary rounded-full'>
        <Facebook className='!size-5' />
      </Button>
    </div>
  )
}

export default Share
