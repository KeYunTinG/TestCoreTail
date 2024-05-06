import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilDog,
  cilPenNib,
  cilCommentBubble,
  cilGift,
  cilClipboard,
  cilTask,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: '團隊成員',
    to: '/admin/staffs',
    icon: <CIcon icon={cilDog} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '專案管理',
    to: '/admin/projects',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '訂單管理',
    to: '/admin/orders',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '訊息',
    to: '/admin/messages',
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '折價券',
    to: '/admin/coupons',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
  },
]

export default _nav
