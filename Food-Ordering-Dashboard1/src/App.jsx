import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from "./components/pages/Dashboard"
import Products from "./components/pages/Product"
import Category from './components/pages/Category'
import Settings from './components/pages/Settings'
import Sidebar from './components/sidebar/Sidebar'
import Order from './components/pages/Order'
import React, { useState } from 'react';
import User from './components/pages/User'
import "./App.css"
import Navbar from './components/navbar/Navbar'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
    document.body.classList.toggle("hide-sidebar")
  }

  return (
    <div className='app'>
      <Navbar showSidebar={showSidebar} handleSidebarToggle={handleSidebarToggle} />
      <Sidebar showSidebar={showSidebar} />
        <div className={`content ${showSidebar ? 'content1' : ''}`}>
        <Routes >
          <Route path='/' element={<Navigate to='/dashboard'/>} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/category' element={<Category />}/>
          <Route path='/orders' element={<Order />}/>
          <Route path='/costumers' element={<User />} />
          <Route path='/settings' element={<Settings />}/>
        </Routes>
        </div>
    </div>

  )
}

export default App