import { Link } from 'react-router-dom';
import "../../styles/Sidebar.css"
import { AiOutlineSetting, AiOutlineUser, AiOutlineUnorderedList} from "react-icons/ai"
import {BiCategory, BiLogOut} from "react-icons/bi";
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import {LuLayoutDashboard} from "react-icons/lu"
import logo from "../../assets/images/logo1.png"

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-context">
            <img className='logo' src={logo} alt="website logo" />
        </div>
        <div className="sidebar-links">
            <ul className='link'>
                <li className='links'>
                    <Link to="/dashboard"><LuLayoutDashboard className='icons'/>Dashboard</Link>
                </li>
                <li className='links'>
                    <Link to="/products"><MdOutlineProductionQuantityLimits className='icons'/>Products</Link>
                </li>
                <li className='links'>
                    <Link to="/category"><BiCategory className='icons'/>Categories</Link>
                </li>
                <li className='links'>
                    <Link to="/orders"><AiOutlineUnorderedList className='icons'/>Orders</Link>
                </li>
                <li className='links'>
                    <Link to="/users"><AiOutlineUser className='icons'/>Users</Link>
                </li>
                <li className='links'>
                    <Link to="/settings"><AiOutlineSetting className='icons'/>Settings</Link>
                </li>
                <li className='links'>
                    <Link to="/logout"><BiLogOut className='icons'/>Logout</Link>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Sidebar;
