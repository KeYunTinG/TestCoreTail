import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
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
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
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

  return (
    <>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              <CIcon icon={cilPeople} />
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">Country</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              Payment Method
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {ordersTable.map((item, index) => (
            <CTableRow v-for="item in tableItems" key={index}>
              <CTableDataCell className="text-center">
                {/* <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} /> */}
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.project}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div className="d-flex justify-content-between text-nowrap">
                  <div>{item.productOrders.name}</div>
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <div>{item.price}</div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" icon={item.payment.icon} />
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-body-secondary text-nowrap">購買時間</div>
                <div className="fw-semibold text-nowrap">{item.purchaseTime}</div>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}

export default orders
