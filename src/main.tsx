import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App.tsx'
import store from './store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <App />
</Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
