import React, { useState } from 'react'
import numeral from 'numeral'

import {
  CAvatar,
  CButton,
  CCardBody,
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
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPlus,
  cilArrowCircleBottom,
  cilArrowCircleTop,
  cilColorBorder,
  cilClipboard,
} from '@coreui/icons'

import avatar1 from '../../assets/images/mygo/1.jpg'
import avatar2 from '../../assets/images/mygo/2.jpg'
import avatar3 from '../../assets/images/mygo/3.jpg'
import avatar4 from '../../assets/images/mygo/4.jpg'
import avatar5 from '../../assets/images/mygo/5.jpg'
import avatar6 from '../../assets/images/mygo/6.jpg'

const projects = () => {
  const [visible, setVisible] = useState(false)
  const [visibleProjectLg, setVisibleProjectLg] = useState(false)
  const [projectContext, setProjectContext] = useState({})
  const [visibleProductLg, setVisibleProductLg] = useState(false)
  const [productContext, setProductContext] = useState({})
  const [modalText, setModalText] = useState('')
  const [productVisible, setProductVisible] = useState(true)
  const productTableClick = (itemId) => {
    setProductVisible((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }))
  }
  const [alterText, setAlter] = useState(true)
  const statusMap = {
    1: '募資中',
    2: '下架',
  }
  const [selectedImage, setSelectedImage] = useState(null)
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      // 檢查檔案類型是否為圖像
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const contents = e.target.result
          setSelectedImage(contents) // 更新狀態以顯示所選圖像
        }
        reader.readAsDataURL(file) // 以 Data URL 格式讀取檔案內容
      } else {
        alert('請選擇圖像檔案！')
      }
    }
  }
  const projectTable = [
    {
      id: 0,
      avatar: avatar1,
      name: 'Yiorgos Avraamu',
      status: 1,
      description: '給錢',
      amount: 350000,
      goal: 500000,
      startingTime: '2024-04-11',
      endTime: '2024-07-01',
      products: [
        {
          id: 1,
          no: 1,
          avatar: avatar6,
          name: '小冰箱1',
          status: 1,
          description: '給錢',
          price: 500,
          purchased: 11,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 2,
          no: 2,
          avatar: avatar6,
          name: '單門冰箱',
          status: 1,
          description: '給錢',
          price: 1500,
          purchased: 22,
          inventory: 33,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 3,
          no: 3,
          avatar: avatar6,
          name: '雙門冰箱',
          status: 1,
          description: '給錢',
          price: 3600,
          purchased: 0,
          inventory: 100,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 4,
          no: 4,
          avatar: avatar6,
          name: '對開冰箱',
          status: 1,
          description: '給錢',
          price: 6500,
          purchased: 200,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 5,
          no: 5,
          avatar: avatar6,
          name: '四門冰箱',
          status: 1,
          description: '給錢',
          price: 13520,
          purchased: 3,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 6,
          no: 6,
          avatar: avatar6,
          name: '五門冰箱',
          status: 1,
          description: '給錢',
          price: 24520,
          purchased: 50,
          inventory: 0,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
      ],
      activity: '10 sec ago',
    },
    {
      id: 1,
      avatar: avatar2,
      name: 'Avram Tarasios',
      status: 1,
      description: '給錢',
      amount: 240000,
      goal: 500000,
      startingTime: '2024-04-11',
      endTime: '2024-07-01',
      products: [
        {
          id: 7,
          no: 1,
          avatar: avatar6,
          name: '小冰箱1',
          status: 1,
          description: '給錢',
          price: 500,
          purchased: 11,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 8,
          no: 2,
          avatar: avatar6,
          name: '單門冰箱',
          status: 1,
          description: '給錢',
          price: 1500,
          purchased: 22,
          inventory: 33,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 9,
          no: 3,
          avatar: avatar6,
          name: '雙門冰箱',
          status: 1,
          description: '給錢',
          price: 3600,
          purchased: 0,
          inventory: 100,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 10,
          no: 4,
          avatar: avatar6,
          name: '對開冰箱',
          status: 1,
          description: '給錢',
          price: 6500,
          purchased: 200,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 11,
          no: 5,
          avatar: avatar6,
          name: '四門冰箱',
          status: 1,
          description: '給錢',
          price: 13520,
          purchased: 3,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 12,
          no: 6,
          avatar: avatar6,
          name: '五門冰箱',
          status: 1,
          description: '給錢',
          price: 24520,
          purchased: 50,
          inventory: 0,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
      ],
      activity: '5 minutes ago',
    },
    {
      id: 2,
      avatar: avatar3,
      name: 'Quintin Ed',
      status: 2,
      description: '給錢',
      amount: 350000,
      goal: 500000,
      startingTime: '2024-04-11',
      endTime: '2024-07-01',
      products: [
        {
          id: 13,
          no: 1,
          avatar: avatar6,
          name: '小冰箱1',
          status: 1,
          description: '給錢',
          price: 500,
          purchased: 11,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 14,
          no: 2,
          avatar: avatar6,
          name: '單門冰箱',
          status: 1,
          description: '給錢',
          price: 1500,
          purchased: 22,
          inventory: 33,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 15,
          no: 3,
          avatar: avatar6,
          name: '雙門冰箱',
          status: 1,
          description: '給錢',
          price: 3600,
          purchased: 0,
          inventory: 100,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 16,
          no: 4,
          avatar: avatar6,
          name: '對開冰箱',
          status: 1,
          description: '給錢',
          price: 6500,
          purchased: 200,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 17,
          no: 5,
          avatar: avatar6,
          name: '四門冰箱',
          status: 1,
          description: '給錢',
          price: 13520,
          purchased: 3,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 18,
          no: 6,
          avatar: avatar6,
          name: '五門冰箱',
          status: 1,
          description: '給錢',
          price: 24520,
          purchased: 50,
          inventory: 0,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
      ],
      activity: '1 hour ago',
    },
    {
      id: 3,
      avatar: avatar4,
      name: 'Enéas Kwadwo',
      status: 1,
      description: '給錢',
      amount: 1000,
      goal: 500000,
      startingTime: '2024-04-11',
      endTime: '2024-07-01',
      products: [
        {
          id: 19,
          no: 1,
          avatar: avatar6,
          name: '小冰箱1',
          status: 1,
          description: '給錢',
          price: 500,
          purchased: 11,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 20,
          no: 2,
          avatar: avatar6,
          name: '單門冰箱',
          status: 1,
          description: '給錢',
          price: 1500,
          purchased: 22,
          inventory: 33,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 21,
          no: 3,
          avatar: avatar6,
          name: '雙門冰箱',
          status: 1,
          description: '給錢',
          price: 3600,
          purchased: 0,
          inventory: 100,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 22,
          no: 4,
          avatar: avatar6,
          name: '對開冰箱',
          status: 1,
          description: '給錢',
          price: 6500,
          purchased: 200,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 23,
          no: 5,
          avatar: avatar6,
          name: '四門冰箱',
          status: 1,
          description: '給錢',
          price: 13520,
          purchased: 3,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 24,
          no: 6,
          avatar: avatar6,
          name: '五門冰箱',
          status: 1,
          description: '給錢',
          price: 24520,
          purchased: 50,
          inventory: 0,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
      ],
      activity: 'Last month',
    },
    {
      id: 4,
      avatar: avatar5,
      name: 'Agapetus Tadeáš',
      status: 1,
      description: '給錢',
      amount: 350000,
      goal: 500000,
      startingTime: '2024-04-11',
      endTime: '2024-07-01',
      products: [
        {
          id: 25,
          no: 1,
          avatar: avatar6,
          name: '小冰箱1',
          status: 1,
          description: '給錢',
          price: 500,
          purchased: 11,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 26,
          no: 2,
          avatar: avatar6,
          name: '單門冰箱',
          status: 1,
          description: '給錢',
          price: 1500,
          purchased: 22,
          inventory: 33,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 27,
          no: 3,
          avatar: avatar6,
          name: '雙門冰箱',
          status: 1,
          description: '給錢',
          price: 3600,
          purchased: 0,
          inventory: 100,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 28,
          no: 4,
          avatar: avatar6,
          name: '對開冰箱',
          status: 1,
          description: '給錢',
          price: 6500,
          purchased: 200,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 29,
          no: 5,
          avatar: avatar6,
          name: '四門冰箱',
          status: 1,
          description: '給錢',
          price: 13520,
          purchased: 3,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 30,
          no: 6,
          avatar: avatar6,
          name: '五門冰箱',
          status: 1,
          description: '給錢',
          price: 24520,
          purchased: 50,
          inventory: 0,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
      ],
      activity: 'Last week',
    },
    {
      id: 5,
      avatar: avatar6,
      name: 'Friderik Dávid',
      status: 1,
      description: '給錢',
      amount: 490000,
      goal: 500000,
      startingTime: '2024-04-11',
      endTime: '2024-07-01',
      products: [
        {
          id: 30,
          no: 1,
          avatar: avatar6,
          name: '小冰箱1',
          status: 1,
          description: '給錢',
          price: 500,
          purchased: 11,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 31,
          no: 2,
          avatar: avatar6,
          name: '單門冰箱',
          status: 1,
          description: '給錢',
          price: 1500,
          purchased: 22,
          inventory: 33,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 32,
          no: 3,
          avatar: avatar6,
          name: '雙門冰箱',
          status: 1,
          description: '給錢',
          price: 3600,
          purchased: 0,
          inventory: 100,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 33,
          no: 4,
          avatar: avatar6,
          name: '對開冰箱',
          status: 1,
          description: '給錢',
          price: 6500,
          purchased: 200,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 34,
          no: 5,
          avatar: avatar6,
          name: '四門冰箱',
          status: 1,
          description: '給錢',
          price: 13520,
          purchased: 3,
          inventory: 3,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
        {
          id: 35,
          no: 6,
          avatar: avatar6,
          name: '五門冰箱',
          status: 1,
          description: '給錢',
          price: 24520,
          purchased: 50,
          inventory: 0,
          startingTime: '2024-04-11',
          endTime: '2024-07-01',
        },
      ],
      activity: 'Last week',
    },
  ]
  return (
    <>
      {
        //#region button
      }
      <CRow className="align-items-center mb-3">
        <CCol xs>
          <CButton
            color="primary"
            onClick={() => {
              setVisibleProjectLg(!visibleProjectLg)
              setAlter(false)
            }}
            style={{ marginRight: '10px' }}
          >
            <CIcon icon={cilPlus} className="me-2" />
            新增專案
          </CButton>
        </CCol>
      </CRow>
      {
        //#endregion
      }
      {
        //#region main
      }
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              <CIcon icon={cilClipboard} />
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">專案名稱</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">狀態</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">進度</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">剩餘時間</CTableHeaderCell>
            <CTableHeaderCell
              className="bg-body-tertiary text-center"
              style={{ width: '120px' }}
            ></CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {projectTable.map((item, index) => (
            <React.Fragment key={index}>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src={item.avatar} />
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.name}</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div>{statusMap[item.status]} </div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between text-nowrap">
                    <div className="fw-semibold">
                      {Math.floor(item.amount >= item.goal ? 100 : (item.amount / item.goal) * 100)}
                      %
                    </div>
                    <div className="ms-3">
                      <small className="text-body-secondary">
                        {numeral(item.amount).format('0,0')}/{numeral(item.goal).format('0,0')}
                      </small>
                    </div>
                  </div>
                  <CProgress
                    thin
                    color={
                      item.amount / item.goal >= 0.8
                        ? 'danger'
                        : item.amount / item.goal >= 0.5
                          ? 'warning'
                          : 'success'
                    }
                    value={item.amount >= item.goal ? 100 : (item.amount / item.goal) * 100}
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="fw-semibold text-nowrap text-center">{item.activity}</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton
                    color="grey"
                    onClick={() => {
                      setVisibleProjectLg(!visibleProjectLg)
                      setAlter(true)
                      setProjectContext([
                        item.avatar,
                        item.name,
                        item.description,
                        item.status,
                        item.goal,
                        item.startingTime,
                        item.endTime,
                      ])
                    }}
                  >
                    <CIcon icon={cilColorBorder} className="me-2" />
                    修改
                  </CButton>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton onClick={() => productTableClick(item.id)}>
                    {productVisible[item.id] ? (
                      <CIcon size="xl" icon={cilArrowCircleTop} />
                    ) : (
                      <CIcon size="xl" icon={cilArrowCircleBottom} />
                    )}
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              {
                // #region products
              }
              {productVisible[item.id] && (
                <React.Fragment>
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      項次
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">產品名稱</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      狀態
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      進度(已售出/目標)
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      剩餘時間
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      庫存
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CButton
                        color="primary"
                        onClick={() => {
                          setVisibleProductLg(!visibleProductLg)
                          setAlter(false)
                          setProductContext([item.id])
                        }}
                      >
                        <CIcon icon={cilPlus} className="me-2" />
                        新增
                      </CButton>
                    </CTableHeaderCell>
                  </CTableRow>
                  {item.products.map((product, productIndex) => (
                    <CTableRow key={`product-${index}-${productIndex}`}>
                      <CTableDataCell className="bg-body-secondary text-center">
                        <div>{productIndex + 1}</div>
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary">
                        <div>{product.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary text-center">
                        <div>{statusMap[product.status]} </div>
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary">
                        <div className=" d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">
                            {Math.floor(
                              (product.purchased / (product.purchased + product.inventory)) * 100,
                            )}
                            %
                          </div>
                          <div className="ms-3">
                            <small className="text-body-secondary">
                              {product.purchased}/{product.purchased + product.inventory}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={
                            product.purchased / (product.purchased + product.inventory) >= 0.8
                              ? 'danger'
                              : product.purchased / (product.purchased + product.inventory) >= 0.5
                                ? 'warning'
                                : 'success'
                          }
                          value={
                            (product.purchased / (product.purchased + product.inventory)) * 100
                          }
                        />
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary text-center">
                        <div>{product.purchased}</div>
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary text-center">
                        <div>{product.inventory}</div>
                      </CTableDataCell>
                      <CTableDataCell
                        className="bg-body-secondary text-center"
                        style={{ width: '130px' }}
                      >
                        <CButton
                          color="Primary"
                          onClick={() => {
                            setVisibleProductLg(!visibleProductLg)
                            setAlter(true)
                            setProductContext([
                              item.id,
                              product.avatar,
                              product.name,
                              product.description,
                              product.status,
                              product.price,
                              product.inventory,
                              product.startingTime,
                              product.endTime,
                            ])
                          }}
                        >
                          <CIcon icon={cilColorBorder} className="me-2" />
                          修改
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </React.Fragment>
              )}
              {
                // #endregion
              }
            </React.Fragment>
          ))}
        </CTableBody>
      </CTable>
      {
        //#endregion
      }
      {
        //#region msgbox
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
      {
        //#endregion
      }
      {
        //#region 方案選單
      }
      <CModal
        fullscreen="lg"
        visible={visibleProjectLg}
        onClose={() => {
          setVisibleProjectLg(false)
          setSelectedImage('')
        }}
        aria-labelledby="FullscreenExample4"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample4">{alterText ? '修改專案' : '新增專案'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardBody className="p-4">
            <CForm>
              <CInputGroup className="mb-3">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {alterText ? (
                  selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  ) : (
                    <img
                      src={projectContext[0]}
                      alt="Selected"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  )
                ) : (
                  ''
                )}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>專案名稱</CInputGroupText>
                <CFormInput required="required" defaultValue={alterText ? projectContext[1] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>專案內容</CInputGroupText>
                <CFormInput required="required" defaultValue={alterText ? projectContext[2] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>狀態</CInputGroupText>
                <CFormSelect
                  aria-label="Default select example"
                  defaultValue={alterText ? projectContext[3] : 2}
                >
                  <option value="1">募資中</option>
                  <option value="2">下架</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>募資目標</CInputGroupText>
                <CFormInput required="required" defaultValue={alterText ? projectContext[4] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>開始時間</CInputGroupText>
                <CFormInput
                  type="date"
                  required="required"
                  defaultValue={alterText ? projectContext[5] : ''}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupText style={{ width: '25%' }}>結束時間</CInputGroupText>
                <CFormInput
                  type="date"
                  required="required"
                  defaultValue={alterText ? projectContext[6] : ''}
                />
              </CInputGroup>
              <div className="d-grid">
                <CButton
                  type="submit"
                  color={alterText ? 'warning' : 'success'}
                  style={{ color: alterText ? 'white' : 'white' }}
                >
                  {alterText ? '修改專案' : '建立專案'}
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CModalBody>
      </CModal>
      {
        //#endregion
      }
      {
        //#region 產品選單
      }
      <CModal
        fullscreen="lg"
        visible={visibleProductLg}
        onClose={() => {
          setVisibleProductLg(false)
          setSelectedImage('')
        }}
        aria-labelledby="FullscreenExample4"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample4">{alterText ? '修改產品' : '新增產品'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardBody className="p-4">
            <CForm>
              <CInputGroup className="mb-3">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {alterText ? (
                  selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  ) : (
                    <img
                      src={productContext[1]}
                      alt="Selected"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  )
                ) : (
                  ''
                )}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>產品名稱</CInputGroupText>
                <CFormInput required="required" defaultValue={alterText ? productContext[2] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>產品內容</CInputGroupText>
                <CFormInput required="required" defaultValue={alterText ? productContext[3] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>狀態</CInputGroupText>
                <CFormSelect
                  aria-label="Default select example"
                  defaultValue={alterText ? productContext[4] : 2}
                >
                  <option value="1">募資中</option>
                  <option value="2">下架</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>產品金額</CInputGroupText>
                <CFormInput required="required" defaultValue={alterText ? productContext[5] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>庫存量</CInputGroupText>
                <CFormInput required="required" defaultValue={alterText ? productContext[6] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>開始時間</CInputGroupText>
                <CFormInput
                  type="date"
                  required="required"
                  defaultValue={alterText ? productContext[7] : ''}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupText style={{ width: '25%' }}>結束時間</CInputGroupText>
                <CFormInput
                  type="date"
                  required="required"
                  defaultValue={alterText ? productContext[8] : ''}
                />
              </CInputGroup>
              <div className="d-grid">
                <CButton
                  type="submit"
                  color={alterText ? 'warning' : 'success'}
                  style={{ color: alterText ? 'white' : 'white' }}
                >
                  {alterText ? '修改產品' : '新增產品'}
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CModalBody>
      </CModal>
      {
        //#endregion
      }
    </>
  )
}

export default projects
