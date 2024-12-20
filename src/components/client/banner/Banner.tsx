'use client'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { BannerType } from '@/types/banner'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {
  banners: BannerType
}

const Banner = ({ banners }: Props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className='mt-4 grid grid-cols-4 max-w-screen-xl mx-auto gap-x-6 px-4'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true
        }}
        className='col-span-3 rounded-xl overflow-hidden'
      >
        <CarouselContent>
          {banners.main.map(banner => (
            <CarouselItem
              key={banner.id}
              className='aspect-[16/7] bg-cover bg-center relative'
              style={{
                backgroundImage: `url(${banner.image})`
              }}
            >
              <Link href={banner.link} className='absolute inset-0' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0 shadow-none rounded-s-none border-none bg-white/60' />
        <CarouselNext className='right-0 shadow-none rounded-e-none border-none bg-white/60' />
        <div className='flex items-center justify-center gap-2 absolute z-10 bottom-4 left-1/2 -translate-x-1/2'>
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              className={cn('size-2 shadow-lg rounded-2xl', current === i + 1 ? 'bg-primary' : 'bg-white')}
            ></span>
          ))}
        </div>
      </Carousel>
      <div
        className='bg-center bg-cover rounded-xl h-full'
        style={{
          backgroundImage: `url(${banners.sub.image})`
        }}
      ></div>
    </div>
  )
}

export default Banner
