import "../../styles/Dashboard.css";
import { FaUsers } from "react-icons/fa";
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineSearch} from "react-icons/ai"

function Dashboard() {
  return (
    <>
    <div className="nav__dashboard">
      <div>
        <h2 className="nav__title">Dashboard</h2>
        <p>Time now</p>
      </div>
      <div className="search">
        <div>
        <span className="nav__icon"><AiOutlineSearch /></span>
        <input type="text" name="" id="" placeholder="search..."/>
        </div>
        <div className="notification__icon">
        <span className="nav__icon"><IoIosNotificationsOutline /></span>
        </div>
      </div>
    </div>
    <div className='dashboard__card'>
      <div className='cards'>
        <div className='card-icon'>
          <FaUsers className='icon' />
        </div>
        <div>
          <p className='card-title'>Total Products</p>
          <h2 className='total'>100k</h2>
        </div>
      </div>
      <div className='cards'>
        <div className='card-icon'>
          <FaUsers className='icon' />
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
          <FaUsers className='icon' />
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
        <th>Action</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}

export default Dashboard;
