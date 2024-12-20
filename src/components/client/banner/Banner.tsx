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
    <div className='mx-auto mt-4 grid max-w-screen-xl grid-cols-4 gap-x-6 px-4'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true
        }}
        className='col-span-3 overflow-hidden rounded-xl'
      >
        <CarouselContent>
          {banners.main.map(banner => (
            <CarouselItem
              key={banner.id}
              className='relative aspect-[16/7] bg-cover bg-center'
              style={{
                backgroundImage: `url(${banner.image})`
              }}
            >
              <Link href={banner.link} className='absolute inset-0' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0 rounded-s-none border-none bg-white/60 shadow-none' />
        <CarouselNext className='right-0 rounded-e-none border-none bg-white/60 shadow-none' />
        <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2'>
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              className={cn('size-2 rounded-2xl shadow-lg', current === i + 1 ? 'bg-primary' : 'bg-white')}
            ></span>
          ))}
        </div>
      </Carousel>
      <div
        className='h-full rounded-xl bg-cover bg-center'
        style={{
          backgroundImage: `url(${banners.sub.image})`
        }}
      ></div>
    </div>
  )
}

export default Banner
