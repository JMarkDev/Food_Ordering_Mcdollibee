import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/products': 'Products',
  '/category': 'Category',
  '/order-list': 'Order List',
  '/order': 'Order',
  '/costumers': 'Customers',
  '/settings': 'Settings',
};

function Navbar({ showSidebar,  handleSidebarToggle}) {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname];

  return (
    <div className={`nav__dashboard ${showSidebar ? 'nav__dashboard1' : ''}`}>
      <div className="burger">
        <RxHamburgerMenu className="burger__icon" onClick={handleSidebarToggle}/>
        <h3 className="nav_title">{pageTitle}</h3>
      </div>
      <div className="search">
        <input type="text" name="" id="" placeholder="search..." />
        <span className="nav__icon search__icon">
          <AiOutlineSearch />
        </span>
        <span className="nav__icon notification__icon">
          <IoIosNotificationsOutline />
        </span>
      </div>
    </div>
  );
}

export default Navbar;