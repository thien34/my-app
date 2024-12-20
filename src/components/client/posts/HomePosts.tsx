import Posts from './Posts'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { PostType } from '@/types/posts'

const listPosts: PostType[] = [
  {
    id: '1',
    title: 'Thu thập Bí Ngô Crypto và chia sẻ 170.000.000đ',
    image: '/posts.png',
    author: 'Nguyễn Văn A',
    date: '2021-10-10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec purus et neque semper maximus. Nulla facilisi. Nullam nec purus et neque semper maximus.'
  },
  {
    id: '4',
    title: 'Thu thập Bí Ngô Crypto và chia sẻ 170.000.000đ',
    image: '/posts.png',
    author: 'Nguyễn Văn A',
    date: '2021-10-10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec purus et neque semper maximus. Nulla facilisi. Nullam nec purus et neque semper maximus.'
  },
  {
    id: '2',
    title: 'Thu thập Bí Ngô Crypto và chia sẻ 170.000.000đ',
    image: '/posts.png',
    author: 'Nguyễn Văn A',
    date: '2021-10-10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec purus et neque semper maximus. Nulla facilisi. Nullam nec purus et neque semper maximus.'
  },
  {
    id: '3',
    title: 'Thu thập Bí Ngô Crypto và chia sẻ 170.000.000đ',
    image: '/posts.png',
    author: 'Nguyễn Văn A',
    date: '2021-10-10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec purus et neque semper maximus. Nulla facilisi. Nullam nec purus et neque semper maximus.'
  }
]

const HomePosts = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 py-6 mt-8'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-semibold uppercase'>Bài viết hay</h3>
        <Button variant={'link'}>
          Xem thêm
          <ArrowRight />
        </Button>
      </div>
      <div className='grid grid-cols-4 gap-x-4 gap-y-12 py-4'>
        {listPosts.map(post => (
          <Posts key={post.id} posts={post} />
        ))}
      </div>
    </div>
  )
}

export default HomePosts
