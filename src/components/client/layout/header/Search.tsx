'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const Search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const handleSearch = useCallback(() => {
    router.push(`/tim-kiem?q=${search}`)
  }, [router, search])
  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleSearch, search])
  return (
    <div className='flex items-center bg-gray-50 rounded-full overflow-hidden pl-3 pr-1 py-0.5'>
      <Input
        value={search}
        placeholder='Tìm kiếm'
        className='rounded-full border-none shadow-none px-1'
        onChange={e => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch} variant={'ghost'} size={'sm'} className='p-2 rounded-full hover:bg-primary/10'>
        <SearchIcon className='size-5 text-primary' />
      </Button>
    </div>
  )
}

export default Search
