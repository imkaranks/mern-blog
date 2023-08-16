import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <main className='p-3 max-w-3xl mx-auto'>
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout