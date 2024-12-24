import Image from 'next/image'
import { Button } from '@/components/ui/button'
import memojiImage from '@public/memoji-computer.png'
import startImage from '@public/start.svg'
import grainImage from '@public/grain.png'
import { ArrowDown } from 'lucide-react'

const Overview = () => {
  return (
    <>
      <div
        className='absolute inset-0 left-1/2 top-1/2 z-0 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-x-clip opacity-[0.03]'
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div
        className='pixelated absolute inset-0 bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${startImage.src})` }}
      />
      {/* <div className='absolute inset-0 left-1/2 top-1/2 mt-12 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5' /> */}
      {/* <div className='absolute inset-0 left-1/2 top-1/2 mt-12 size-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5' /> */}
      {/* <div className='absolute inset-0 left-1/2 top-1/2 mt-12 size-[1020px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5' /> */}
      <div className='relative z-10'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={memojiImage} alt='Memoji at computer' width={80} height={80} />
          <div className='inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5 text-center'>
            <div className='size-2.5 rounded-full bg-green-500'></div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>
        <div className='mx-auto max-w-lg'>
          <h1 className='mt-8 text-center text-3xl tracking-wide md:text-5xl'>Building Exceptional User Experiences</h1>
          <p className='mt-6 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss
            your project.
          </p>
        </div>
        <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
          <Button className='inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-7 py-3'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown />
          </Button>
          <Button className='inline-flex items-center rounded-lg border border-white bg-white px-7 py-3 text-gray-900'>
            👋 <span className='font-semibold'>Let&apos;s Connect</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Overview
