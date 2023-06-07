import "../../styles/Dashboard.css";
import { FaUsers } from "react-icons/fa";
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import RevenueImg from "../../assets/images/revenue.png"
import OrdersImg from "../../assets/images/order.png"
function Dashboard() {
  return (
    <>
    <div className="nav__dashboard">
      <div>
        <h3 className="nav__title">Dashboard</h3>
        <p className="nav__time">Mon 30 June 2023 | 12:00 PM</p>
      </div>
      <div className="search">
        <input type="text" name="" id="" placeholder="search..."/>
        <span className="nav__icon search__icon"><AiOutlineSearch /></span>
        <span className="nav__icon notification__icon"><IoIosNotificationsOutline /></span>
      </div>
    </div>
    <div className='dashboard__card'>
      <div className='cards'>
        <div className='card-icon'>
          <MdOutlineProductionQuantityLimits className='icon' />
        </div>
        <div>
          <p className='card-title'>Products</p>
          <h2 className='total'>100k</h2>
        </div>
      </div>
      <div className='cards'>
        <div className='card-icon'>
          <img className="card__img" src={OrdersImg} alt="orders image" />
        </div>
        <div>
          <p className='card-title'>Total Orders</p>
          <h2 className='total'>100k</h2>
        </div>
      </div>
      <div className='cards'>
        <div className='card-icon'>
          <FaUsers className='icon' />
        </div>
        <div>
          <p className='card-title'>Total Users</p>
          <h2 className='total'>100k</h2>
        </div>
      </div>
      <div className='cards'>
        <div className='card-icon'>
          <img className="card__img" src={RevenueImg} alt="revenue image" />
        </div>
        <div>
          <p className='card-title'>Total Revenue</p>
          <h2 className='total'>100k</h2>
        </div>
      </div>
    </div>
    <div className="dashboard-table">
        <h2 className="table-title">Recent Order</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>Order Id</th>
        <th>Payment Method</th>
        <th>Order Date</th>
        <th>Status</th>
        <th>Total</th>
        <th colSpan={2}>Action</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>View</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>View</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>View</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>View</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>View</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>View</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}

export default Dashboard;
