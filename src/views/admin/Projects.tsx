import React, { useState, useEffect }from 'react'
import numeral from 'numeral'
import { getProjects } from '../../api/Projects'
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const projectUrl = import.meta.env.VITE_PROJECT_IMG_URL;
const productUrl = import.meta.env.VITE_PRODUCT_IMG_URL;
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
//計算剩餘天數
function calculateRemainingDays(expireDate: string, startDate: string): number {
  const endDate: Date = new Date(expireDate);
  const startDateObj: Date = new Date(startDate);
  const timeDiff: number = endDate.getTime() - startDateObj.getTime();
  const remainingDays: number = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return remainingDays;
}
const date = new Date()
const Projects = () => {
  const [visibleModal, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [visibleProjectLg, setvisibleProjectModal] = useState(false);
  const [visibleProductLg, setVisibleProductModal] = useState(false);
  const [projectContext, setProjectContext] = useState({});
  const [productContext, setProductContext] = useState({});
  const [productVisible, setProductVisible] = useState<{ [key: string]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [projects, setProjects] = useState(null);
  const [formData, setFormData] = useState({});
  //下拉式選單
  const productTableClick = (itemId: string) => {
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
//載入api
 useEffect(() => {
  const fetchProjects = async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(
        fetchedProjects.map((project) => ({
          ...project,
          isEdit: false,
        }))
      );
      //console.log('fetchedProjects:', fetchedProjects); // 確認資料是否成功加載
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  fetchProjects();
}, []);

//POST/PUT Modal------------------------------------------------------
const handleFormSubmit = (event) => {
  event.preventDefault(); // 阻止表單默認的提交行為

  const formData = new FormData(event.target); // 收集表單數據

  // 準備要發送的數據，可以對數據進行進一步處理或驗證
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  setFormData(jsonData);
  setModalText(alterText ? '您確認要修改這個專案嗎？' : '您確認要建立這個專案嗎？');
  setModalVisible(true);
};
const handleConfirmSubmit = () => {
  const url = alterText ? `${baseUrl}/api/project/${formData.id}` : `${baseUrl}/api/project`;
  const method = alterText ? 'PUT' : 'POST';
  fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json', // 指定 Content-Type 為 application/json
    },
    body: JSON.stringify(formData), // 轉換數據為 JSON 字符串並作為請求體
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('網路請求失敗！');
      }
      return response.json();
    })
    .then((data) => {
      console.log('成功提交數據：', data);
      setModalVisible(false); // 確認表單
      setvisibleProjectModal(false); // 主表單
    })
    .catch((error) => {
      console.error('提交數據時發生錯誤：', error);
    });
};
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
              setvisibleProjectModal(!visibleProjectLg)
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
        //#region main-----------------------------------------------------------------------------------
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
          {projects && projects.map((item, index) => (
            <React.Fragment key={index}>
              <CTableRow>
                <CTableDataCell className="text-center">
                  {/* <CAvatar size="md" src={item.thumbnail} /> */}
                  <CAvatar size="md" src={projectUrl+item.thumbnail} />
                </CTableDataCell>
                <CTableDataCell width={500}>
                  <div>{item.projectName}</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                <div>{statusMap[1]} </div>
                  {/* <div>{statusMap[item.Status]} </div> */}
                </CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between text-nowrap">
                    <div className="fw-semibold">
                      {Math.floor(item.accumulatedAmount / item.goal * 100)}
                      %
                    </div>
                    <div className="ms-3">
                      <small className="text-body-secondary">
                        {numeral(item.accumulatedAmount).format('0,0')}/{numeral(item.goal).format('0,0')}
                      </small>
                    </div>
                  </div>
                  <CProgress
                    thin
                    color={
                      item.accumulatedAmount / item.goal >= 0.8
                        ? 'success'
                        : item.accumulatedAmount / item.goal >= 0.5
                          ? 'warning'
                          : 'danger'
                    }
                    value={(item.accumulatedAmount / item.goal) >= 100 ? 100 : (item.accumulatedAmount / item.goal) * 100}
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="fw-semibold text-nowrap text-center"> {calculateRemainingDays(item.expireDate, date) < 0 ? 0 : calculateRemainingDays(item.expireDate, date)}天</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton
                    color="grey"
                    onClick={() => {
                      setvisibleProjectModal(!visibleProjectLg)
                      setAlter(true)
                      setProjectContext([
                        item.projectId,
                        //item.thumbnail,
                        projectUrl+item.thumbnail,
                        item.projectName,
                        item.description,
                        // item.Status,
                        1,
                        item.goal,
                        item.date,
                        item.expireDate,
                      ])
                    }}
                  >
                    <CIcon icon={cilColorBorder} className="me-2" />
                    修改
                  </CButton>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton onClick={() => productTableClick(item.projectId)}>
                    {productVisible[item.projectId] ? (
                      <CIcon size="xl" icon={cilArrowCircleTop} />
                    ) : (
                      <CIcon size="xl" icon={cilArrowCircleBottom} />
                    )}
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              {
// #region 產品-----------------------------------------------------------------------------------
              }
              {productVisible[item.projectId] && (
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
                      進度(售出/目標)
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
                          setVisibleProductModal(!visibleProductLg)
                          setAlter(false)
                          setProductContext([item.projectId])
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
                        <div>{product.productName}</div>
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary text-center">
                      <div>{statusMap[1]} </div>
                        {/* <div>{statusMap[product.Status]} </div> */}
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary">
                        <div className=" d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">
                            {Math.floor(
                              ((product.quantity - product.inventory) / product.quantity) * 100,
                            )}
                            %
                          </div>
                          <div className="ms-3">
                            <small className="text-body-secondary">
                              {product.quantity - product.inventory}/{product.quantity}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={
                            (product.quantity - product.inventory) / product.quantity >= 0.8
                              ? 'success'
                              : (product.quantity - product.inventory)/ product.quantity >= 0.5
                                ? 'warning'
                                : 'danger'
                          }
                          value={
                            ((product.quantity - product.inventory)/ product.quantity) * 100
                          }
                        />
                      </CTableDataCell>
                      <CTableDataCell className="bg-body-secondary text-center">
                        <div>{calculateRemainingDays(product.expireDate, product.date) < 0 ? 0 : calculateRemainingDays(product.expireDate, product.date)}天</div>
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
                            setVisibleProductModal(!visibleProductLg)
                            setAlter(true)
                            setProductContext([
                              item.projectId,
                              //product.thumbnail,
                              productUrl+ product.thumbnail,
                              product.productName,
                              product.productDescription,
                              // product.Status,
                              1,
                              product.price,
                              product.inventory,
                              product.date,
                              product.expireDate,
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
//#region Modal-----------------------------------------------------------------------------------
      }
      <CModal
        visible={visibleModal}
        onClose={() => setModalVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setModalVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">提示</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>{modalText}</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary"onClick={handleConfirmSubmit}>確認</CButton>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            取消
          </CButton>
        </CModalFooter>
      </CModal>
      {
        //#endregion
      }
      {
//#region 方案選單-----------------------------------------------------------------------------------
      }
      <CModal
        fullscreen="lg"
        visible={visibleProjectLg}
        onClose={() => {
          setvisibleProjectModal(false)
          setSelectedImage('')
        }}
        aria-labelledby="FullscreenExample4"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample4">{alterText ? '修改專案' : '新增專案'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardBody className="p-4">
            <CForm onSubmit={(e) => handleFormSubmit(e)}>
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
                      src={projectContext[1]}
                      alt="Selected"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  )
                ) : (selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                ) : '')}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>專案名稱</CInputGroupText>
                <CFormInput required="required" name="projectName" defaultValue={alterText ? projectContext[2] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>專案內容</CInputGroupText>
                <CFormInput required="required" name="description" defaultValue={alterText ? projectContext[3] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>狀態</CInputGroupText>
                <CFormSelect
                  aria-label="Default select example"
                  defaultValue={alterText ? projectContext[4] : 2}
                >
                  <option value="1">募資中</option>
                  <option value="2">下架</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>募資目標</CInputGroupText>
                <CFormInput required="required"  name="goal" defaultValue={alterText ? projectContext[5] : ''} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '25%' }}>開始時間</CInputGroupText>
                <CFormInput
                  type="date"
                  required="required"
                  name="date"
                  defaultValue={alterText ? projectContext[6] : ''}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupText style={{ width: '25%' }}>結束時間</CInputGroupText>
                <CFormInput
                  type="date"
                  required="required"
                  name="expireDate"
                  defaultValue={alterText ? projectContext[7] : ''}
                />
              </CInputGroup>
              {/* needtofix */}
              <CFormInput type="hidden" required="required"  name="roleId" defaultValue="2" />
              <CFormInput type="hidden" required="required"  name="memberId" defaultValue="41" />
              <CFormInput type="hidden" name="id" value={projectContext[0]} /> 
              {/* needtofix */}
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
//#region 產品選單-----------------------------------------------------------------------------------
      }
      <CModal
        fullscreen="lg"
        visible={visibleProductLg}
        onClose={() => {
          setVisibleProductModal(false)
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

export default Projects
