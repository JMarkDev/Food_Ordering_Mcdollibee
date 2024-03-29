import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from "./components/pages/Dashboard"
import Products from "./components/pages/Product"
import Category from './components/pages/Category'
import Settings from './components/pages/Settings'
import Sidebar from './components/sidebar/Sidebar'
import Orderlist from './components/pages/Orderlist'
import Review from './components/pages/Review'
import Order from './components/pages/Order'
import { useState } from 'react';
import Customer from './components/pages/Customer'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import Pagenotfound from './components/pages/Pagenotfound'
import EditProduct from './components/pages/EditProduct'

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
          <Route path='/order-list' element={<Orderlist/>}/>
          <Route path='/order' element={<Order />}/>
          <Route path='/costumers' element={<Customer />} />
          <Route path='/settings' element={<Settings />}/>
          <Route path='/review' element={<Review />}/>
          <Route path='/editproduct/:id' element={<EditProduct/>}/>
          <Route path='*' element={<Pagenotfound/>} />
        </Routes>
        </div>
    </div>

  )
}

export default App