import { Banner, BannerFooter } from '@/components/client/banner'
import { HomePosts } from '@/components/client/posts'
import { BannerType } from '@/types/banner'

const banners: BannerType = {
  main: [
    {
      id: '1',
      title: 'Banner 1',
      description: 'Description 1',
      image: '/banner-1.jpg',
      link: '/banner1'
    },
    {
      id: '2',
      title: 'Banner 2',
      description: 'Description 2',
      image: '/banner-2.jpg',
      link: '/banner2'
    },
    {
      id: '3',
      title: 'Banner 3',
      description: 'Description 3',
      image: '/banner-2.webp',
      link: '/banner3'
    }
  ],
  sub: {
    id: '1',
    title: 'Banner 2',
    description: 'Description 2',
    image: '/sub-banner.jpg',
    link: '/banner2'
  }
}

export default async function Home() {
  return (
    <main>
      <Banner banners={banners} />
      <HomePosts />
      <BannerFooter />
    </main>
  )
}
