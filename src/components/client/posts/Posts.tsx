import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { PostType } from '@/types/posts'

type PostsProps = {
  posts: PostType
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <Link href={`/bai-viet/${posts.title}`} className='rounded-md bg-gray-50'>
      <div className='aspect-video h-40 w-full rounded-t-lg bg-gray-300'>
        <Image
          src={posts.image}
          alt={posts.title}
          className='aspect-video w-full rounded-t-lg object-cover'
          width={300}
          height={200}
        />
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between py-1'>
          <p>
            <span className='text-sm text-gray-500'>Tác giả: </span>
            <span className='text-sm text-blue-500'>{posts.author}</span>
          </p>
          {/* 2 gio truoc */}
          <p className='text-sm text-gray-500'>{format(new Date(posts.date), 'dd/MM/yyyy')}</p>
        </div>
        <h4 className='line-clamp-2 text-base font-semibold'>{posts.title}</h4>
        <p className='mt-1 line-clamp-3 text-sm text-gray-500'>{posts.description}</p>
      </div>
    </Link>
  )
}

export default Posts
