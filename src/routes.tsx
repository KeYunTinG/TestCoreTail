import React from 'react'


const Dashboard = React.lazy(() => import('./views/admin/dashboard/Dashboard'))
const Staffs = React.lazy(() => import('./views/admin/Staffs'))
const Projects = React.lazy(() => import('./views/admin/Projects'))
const Messages = React.lazy(() => import('./views/admin/Messages'))
const Coupons = React.lazy(() => import('./views/admin/Coupons'))
const Orders = React.lazy(() => import('./views/admin/Orders'))
const OrderList = React.lazy(() => import('./views/admin/OrderList'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/staffs', name: 'Staffs', element: Staffs },
  { path: '/projects', name: 'Projects', element: Projects },
  { path: '/messages', name: 'Messages', element: Messages },
  { path: '/coupons', name: 'Coupons', element: Coupons },
  { path: '/orders/:id', name: 'OrderList', element: OrderList },
  { path: '/orders', name: 'Orders', element: Orders },
]

export default routes
