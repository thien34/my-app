import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  className?: string
}

const dataFooter = [
  {
    title: 'Sản phẩm',
    links: [
      {
        title: 'Giới thiệu sản phẩm',
        link: '/san-pham/gioi-thieu'
      },
      {
        title: 'Danh sách sản phẩm',
        link: '/san-pham/danh-sach'
      },
      {
        title: 'Khuyến mãi',
        link: '/san-pham/khuyen-mai'
      },
      {
        title: 'Đánh giá sản phẩm',
        link: '/san-pham/danh-gia'
      }
    ]
  },
  {
    title: 'Dịch vụ',
    links: [
      {
        title: 'Hỗ trợ kỹ thuật',
        link: '/dich-vu/ho-tro-ky-thuat'
      },
      {
        title: 'Bảo hành',
        link: '/dich-vu/bao-hanh'
      },
      {
        title: 'Đổi trả',
        link: '/dich-vu/doi-tra'
      },
      {
        title: 'Dịch vụ khách hàng',
        link: '/dich-vu/khach-hang'
      }
    ]
  },
  {
    title: 'Về chúng tôi',
    links: [
      {
        title: 'Câu chuyện của chúng tôi',
        link: '/ve-chung-toi/cau-chuyen'
      },
      {
        title: 'Đội ngũ',
        link: '/ve-chung-toi/doi-ngu'
      },
      {
        title: 'Tuyển dụng',
        link: '/ve-chung-toi/tuyen-dung'
      },
      {
        title: 'Liên hệ hợp tác',
        link: '/ve-chung-toi/hop-tac'
      }
    ]
  },
  {
    title: 'Tin tức',
    links: [
      {
        title: 'Tin mới nhất',
        link: '/tin-tuc/moi-nhat'
      },
      {
        title: 'Sự kiện',
        link: '/tin-tuc/su-kien'
      },
      {
        title: 'Thông cáo báo chí',
        link: '/tin-tuc/thong-cao-bao-chi'
      },
      {
        title: 'Blog',
        link: '/tin-tuc/blog'
      }
    ]
  },
  {
    title: 'Hỗ trợ',
    links: [
      {
        title: 'Liên hệ chúng tôi',
        link: '/contact'
      },
      {
        title: 'Chính sách bảo mật',
        link: '/ho-tro/chinh-sach-bao-mat'
      },
      {
        title: 'Điều khoản sử dụng',
        link: '/ho-tro/dieu-khoan'
      },
      {
        title: 'Trung tâm trợ giúp',
        link: '/ho-tro/trung-tam-tro-giup'
      }
    ]
  }
]

export default function Footer({ className }: Props) {
  return (
    <div className={cn('mt-12 border-t border-zinc-100', className)}>
      <footer className='mx-auto w-full max-w-screen-xl px-4 sm:px-6' aria-labelledby='footer-heading'>
        <div className='mb-16'>
          <div className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5'>
            {dataFooter.map((item, index) => (
              <div key={index}>
                <h3 className='text-sm/6 font-semibold text-gray-900'>{item.title}</h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {item.links.map((link, index) => (
                    <li key={index} className='group'>
                      <Link href={link.link} className='text-sm/6 text-gray-600 hover:text-gray-900 '>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2'>
          <p className='text-sm/6 text-slate-600 max-md:text-center'>© 2024 Template - Anh Van Hoa</p>
          <div className='flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end'></div>
        </div>
      </footer>
    </div>
  )
}
