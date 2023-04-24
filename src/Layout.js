import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <main className=''>
        <Header />
        <div className='py-16'><Outlet /></div>
        <Footer />
    </main>
  )
}

export default Layout