const footerBanner = [
  {
    id: '1',
    image: '/banner-2.jpg'
  },
  {
    id: '2',
    image: '/banner-1.jpg'
  }
]

const BannerFooter = () => {
  return (
    <div className='grid mt-8 grid-cols-2 gap-x-6 max-w-screen-xl px-4 mx-auto'>
      {footerBanner.map(banner => (
        <div
          key={banner.id}
          className='bg-center bg-cover aspect-[16/7] rounded-xl'
          style={{
            backgroundImage: `url(${banner.image})`
          }}
        ></div>
      ))}
    </div>
  )
}

export default BannerFooter
