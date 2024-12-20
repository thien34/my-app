import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { PostType } from '@/types/posts'

type PostsProps = {
  posts: PostType
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <Link href={`/bai-viet/${posts.title}`} className='bg-gray-50 rounded-md'>
      <div className='h-40 bg-gray-300 rounded-t-lg aspect-video w-full'>
        <Image
          src={posts.image}
          alt={posts.title}
          className='rounded-t-lg w-full object-cover aspect-video'
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
        <h4 className='text-base line-clamp-2 font-semibold'>{posts.title}</h4>
        <p className='text-gray-500 mt-1 text-sm line-clamp-3'>{posts.description}</p>
      </div>
    </Link>
  )
}

export default Posts
