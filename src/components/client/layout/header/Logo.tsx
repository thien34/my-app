import Image from 'next/image'
import Link from 'next/link'

type Props = {
  logo: {
    src: string
    alt: string
  }
}

const Logo = ({ logo }: Props) => {
  return (
    <div>
      <Link href={'/'}>
        <Image className='size-9 rounded-md' src={logo.src} alt={logo.alt} width={80} height={80} />
      </Link>
    </div>
  )
}

export default Logo
