import React, { Suspense, useEffect } from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import '../scss/style.scss'
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Home = React.lazy(() => import('./views/Home'))

function App() {

  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
        <Route exact path="/admin/*" name="admin" element={<DefaultLayout />} />
        <Route path="/" name="Home" element={<Home />} /> 
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
