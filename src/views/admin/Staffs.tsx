import React, { useState } from 'react'
import { DocsExample } from '../../components'
import { cilBell } from '@coreui/icons'
import Select from 'react-select'

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
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
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
  cifJp,
  cifTw,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilPlus,
  cilPencil,
} from '@coreui/icons'

import avatar1 from '../../assets/images/mygo/1.jpg'
import avatar2 from '../../assets/images/mygo/2.jpg'
import avatar3 from '../../assets/images/mygo/3.jpg'
import avatar4 from '../../assets/images/mygo/4.jpg'
import avatar5 from '../../assets/images/mygo/5.jpg'
import avatar6 from '../../assets/images/mygo/6.jpg'

const staffs = () => {
  const [visible, setVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [visibleMd, setVisibleMd] = useState(false)
  const [alterText, setAlter] = useState(true)
  const colourOptions = [
    { avatar: avatar6, value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { avatar: avatar6, value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { avatar: avatar6, value: 'purple', label: 'Purple', color: '#5243AA' },
    { avatar: avatar6, value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { avatar: avatar6, value: 'orange', label: 'Orange', color: '#FF8B00' },
    { avatar: avatar6, value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { avatar: avatar6, value: 'green', label: 'Green', color: '#36B37E' },
    { avatar: avatar6, value: 'forest', label: 'Forest', color: '#00875A' },
    { avatar: avatar6, value: 'slate', label: 'Slate', color: '#253858' },
    { avatar: avatar6, value: 'silver', label: 'Silver', color: '#666666' },
  ]
  const tableExample = [
    {
      id: 0,
      avatar: { src: avatar1, status: 'success' },
      name: '高松澄',
      new: true,
      registered: 'Jan 1, 2023',
      address: '京都千代田区1-1-1',
      job: '主唱',
      country: { name: 'Japan', flag: cifJp },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      id: 1,
      avatar: { src: avatar2, status: 'danger' },
      name: '千早愛音',
      new: false,
      registered: 'Jan 1, 2023',
      address: '大阪府大阪市中央区2-2-2',
      job: '吉他手',
      country: { name: 'Japan', flag: cifJp },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      id: 2,
      avatar: { src: avatar3, status: 'warning' },
      name: '長崎素世',
      new: true,
      registered: 'Jan 1, 2023',
      address: '北海道札幌市北区3-3-3',
      job: '貝斯手',
      country: { name: 'Japan', flag: cifJp },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      id: 3,
      avatar: { src: avatar4, status: 'secondary' },
      name: '要樂奈',
      new: true,
      registered: 'Jan 1, 2023',
      address: '福岡県福岡市博多区4-4-4',
      job: '吉他手',
      country: { name: 'Japan', flag: cifJp },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      id: 4,
      avatar: { src: avatar5, status: 'success' },
      name: '椎名立希',
      new: true,
      registered: 'Jan 1, 2023',
      address: '愛知県名古屋市中区5-5-5',
      job: '鼓手',
      country: { name: 'Japan', flag: cifJp },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
  ]
  return (
    <>
      {/* buttom*/}
      <CRow className="align-items-center mb-3">
        <CCol xs>
          <CButton
            color="primary"
            onClick={() => {
              setVisibleMd(!visibleMd)
              setModalText('add')
            }}
            style={{ marginRight: '10px' }}
          >
            <CIcon icon={cilPlus} className="me-2" />
            增加
          </CButton>
          <CButton
            color="secondary"
            onClick={() => {
              setVisible(!visible)
              setModalText('edit')
            }}
            style={{ marginRight: '10px' }}
          >
            <CIcon icon={cilPencil} className="me-2" />
            修改
          </CButton>
        </CCol>
      </CRow>
      {
        //#region user
      }
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              <CIcon icon={cilPeople} />
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">職稱</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">地址</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              Payment Method
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {tableExample.map((item, index) => (
            <CTableRow v-for="item in tableItems" key={index}>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.name}</div>
                <div className="small text-body-secondary text-nowrap">
                  <span>{item.new ? 'New' : 'Recurring'}</span> | Registered: {item.registered}
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <div className="fw-semibold text-nowrap">{item.job}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div className="fw-semibold text-nowrap">{item.address}</div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" icon={item.payment.icon} />
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-body-secondary text-nowrap">Last login</div>
                <div className="fw-semibold text-nowrap">{item.activity}</div>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {
        //#endregion
      }
      {
        //#region modal
      }
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">提示</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>{modalText}</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
      <CModal
        fullscreen="md"
        visible={visibleMd}
        onClose={() => setVisibleMd(false)}
        aria-labelledby="FullscreenExample3"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample3">增加人員</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {' '}
          <Select
            defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <div className="d-grid" style={{ marginTop: '30px' }}>
            <CButton
              type="submit"
              color={'success'}
              style={{ color: alterText ? 'white' : 'white' }}
            >
              {'新增人員'}
            </CButton>
          </div>
        </CModalBody>
      </CModal>
      {
        //#endregion
      }
    </>
  )
}

export default staffs
