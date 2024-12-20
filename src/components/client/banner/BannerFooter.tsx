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
    <div className='mx-auto mt-8 grid max-w-screen-xl grid-cols-2 gap-x-6 px-4'>
      {footerBanner.map(banner => (
        <div
          key={banner.id}
          className='aspect-[16/7] rounded-xl bg-cover bg-center'
          style={{
            backgroundImage: `url(${banner.image})`
          }}
        ></div>
      ))}
    </div>
  )
}

export default BannerFooter
