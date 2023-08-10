import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Sidebar.css"
import { AiOutlineSetting, AiOutlineUser, AiOutlineUnorderedList} from "react-icons/ai"
import {BiCategory, BiLogOut} from "react-icons/bi";
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import {LuLayoutDashboard} from "react-icons/lu"
import logo from "../../assets/images/logo2.png"
import logo1 from "../../assets/images/logo__icon.png"
import PropTypes from 'prop-types'; 

function Sidebar({showSidebar}) {
    const [setActiveBtn] = useState(null);

    const handleBtnClick = (event) => {
        const currentActive = document.querySelector(".btn__active");
        if(currentActive) {
            currentActive.classList.remove("btn__active");
        }
        event.target.classList.add("btn__active");
        setActiveBtn(event.target);
    };

    Sidebar.propTypes = {
        showSidebar: PropTypes.bool.isRequired, // Use 'bool' if showSidebar is a boolean
    };
  return (
    <div className={`sidebar ${showSidebar ? "hide__sidebar" : ""}`}>
        <div className="sidebar-context">
        <img className="logo" src={showSidebar ? logo1 : logo} alt="website logo" />

        </div>
        <div className="sidebar-links">
                <ul className='show_links'>
                    <li className="links btn__active" onClick={handleBtnClick}>
                        <Link to="/dashboard" className="link">
                            <LuLayoutDashboard  className='icons'/>
                            Dashboard
                        </Link>
                    </li>  
                    <li className="links" onClick={handleBtnClick}>
                        <Link to="/products" className="link">
                            <MdOutlineProductionQuantityLimits className='icons'/>
                            Products
                        </Link>
                    </li>   
                    <li className="links" onClick={handleBtnClick}>
                        <Link to="/category" className="link">
                            <BiCategory className='icons'/>
                            Categories
                        </Link>
                    </li>
                    <li className="links" onClick={handleBtnClick}>
                        <Link to="/order-list" className="link">
                        <AiOutlineUnorderedList className='icons'/>
                            Order List
                        </Link>
                    </li>
                    <li className="links" onClick={handleBtnClick}>
                        <Link to="/costumers" className="link">
                        <AiOutlineUser className='icons'/>
                            Customers
                        </Link>
                    </li>
                    <li className="links" onClick={handleBtnClick}>
                        <Link to="/settings" className="link">
                        <AiOutlineSetting className='icons'/>
                            Settings
                        </Link>
                    </li>
                    <li className="links">
                        <Link to="/logout" className="link">
                            <BiLogOut className='icons'/>
                            Logout
                        </Link>
                    </li>
                </ul>

        {showSidebar && 
            <ul className='hide_links'>
                <li className="links btn__active1">
                    <Link to="/dashboard" className="link active">
                        <LuLayoutDashboard className="icons"/>
                    </Link>
                </li>
                <li className="links">
                    <Link to="/products" className="link">
                        <MdOutlineProductionQuantityLimits className='icons'/>
                    </Link>
                </li>
                <li className="links">
                    <Link to="/category" className="link">
                        <BiCategory className='icons'/>
                    </Link>
                </li>
                <li className="links">
                    <Link to="/order-list" className="link">
                        <AiOutlineUnorderedList className='icons'/>
                    </Link>
                </li>
                <li className="links">
                    <Link to="/costumers" className="link">
                        <AiOutlineUser className='icons'/>
                    </Link>
                </li>
                <li className="links">
                    <Link to="/settings" className="link">
                            <AiOutlineSetting className='icons'/>
                    </Link>
                </li>
                <li className="links">
                    <Link to="/logout" className="link">
                        <BiLogOut className='icons'/>
                    </Link>
                </li>
                
            </ul>
        }
        </div>
    </div>
  );
}

export default Sidebar;
