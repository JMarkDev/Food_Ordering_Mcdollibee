import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from "./components/pages/Dashboard"
import Products from "./components/pages/Product"
import Category from './components/pages/Category'
import Settings from './components/pages/Settings'
import Sidebar from './components/sidebar/Sidebar'
import Order from './components/pages/Order'
import User from './components/pages/User'
import "./App.css"
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Navbar />
        <div className="content">
        <Routes >
          <Route path='/' element={<Navigate to='/dashboard'/>} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/category' element={<Category />}/>
          <Route path='/orders' element={<Order />}/>
          <Route path='/users' element={<User />} />
          <Route path='/settings' element={<Settings />}/>
        </Routes>
        </div>
    </div>
  )
}

export default App