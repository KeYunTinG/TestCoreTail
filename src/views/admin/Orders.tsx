import '../../../scss/tailwind.scss'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from '../../assets/images/avatars/1.jpg'
import avatar2 from '../../assets/images/avatars/2.jpg'
import avatar3 from '../../assets/images/avatars/3.jpg'
import avatar4 from '../../assets/images/avatars/4.jpg'
import avatar5 from '../../assets/images/avatars/5.jpg'
import avatar6 from '../../assets/images/avatars/6.jpg'

const orders = () => {
  const ordersTable = [
    {
      project:
        '【PHILIPS 黑金剛】三合一磁吸充電系列｜一秒強勁吸附，智慧溫控晶片，簡化生活快速時尚！',
      productOrders: [
        {
          name: '早鳥 旗艦組',
          price: 2990,
          count: 2,
        },
        {
          name: '早鳥 三合一充電組',
          price: 2390,
          count: 3,
        },
        {
          name: '早鳥 行動電源組',
          price: 1790,
          count: 4,
        },
        {
          name: '超早鳥 旗艦組',
          price: 2850,
          count: 7,
        },
      ],
      price: 71711,
      payment: { name: 'PayPal', icon: cibCcPaypal },
      purchaseTime: '2024-04-11',
    },
  ]
  const callouts = [
    {
      id:1,
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/admin/orders/1',
    },
    {
      id:2,
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/admin/orders/2',
    },
    {
      id:3,
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/admin/orders/3',
    },
    
  ]
  return (
    <>
        <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none ">
          <h2 className="text-2xl font-bold text-gray-900">專案列表</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default orders
