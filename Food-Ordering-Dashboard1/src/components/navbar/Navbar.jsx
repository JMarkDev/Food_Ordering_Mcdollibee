import propTypes from 'prop-types';
import { IoIosNotificationsOutline } from 'react-icons/io';
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

  Navbar.propTypes = {
    showSidebar: propTypes.bool.isRequired,
    handleSidebarToggle: propTypes.func.isRequired,
  };
  
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname];

  return (
    <div className={`nav__dashboard ${showSidebar ? 'nav__dashboard1' : ''}`}>
      <div className="burger">
        <RxHamburgerMenu className="burger__icon" onClick={handleSidebarToggle}/>
        <h3 className="nav_title">{pageTitle}</h3>
      </div>
      <div className="nav_icon">
        <span className="nav__icon notification__icon">
          <IoIosNotificationsOutline />
        </span>
      </div>
    </div>
  );
}

export default Navbar;