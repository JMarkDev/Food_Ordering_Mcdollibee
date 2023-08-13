import "../../styles/User.css"
import {useState} from 'react';
import {BsThreeDots} from "react-icons/bs"
import {FiXCircle, FiAlertCircle} from "react-icons/fi"
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

function Customer() {
    const [activeOrderId, setActiveOrderId] = useState(null);

  const orderStatus = (orderId) => {
    setActiveOrderId((prevOrderId) => (prevOrderId === orderId ? null : orderId));
    document.body.classList.add("status");
  };

  const allOrders = [
    { id: 1,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      location: "Pagadian City",
      totalSpent: 100.00,
      lastOrder: 100.00
    },
    { id: 2,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      location: "Pagadian City",
      totalSpent: 100.00,
      lastOrder: 100.00
    },
    { id: 3,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      location: "Pagadian City",
      totalSpent: 100.00,
      lastOrder: 100.00
    },
    { id: 4,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      location: "Pagadian City",
      totalSpent: 100.00,
      lastOrder: 100.00
    },
    { id: 5,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      location: "Pagadian City",
      totalSpent: 100.00,
      lastOrder: 100.00
    },
    { id: 6,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      location: "Pagadian City",
      totalSpent: 100.00,
      lastOrder: 100.00
    }
  ]
  return (
      <div className='dashboard'>
      <div className="customer">
      <div className="search">
        <input type="text" name="" id="" placeholder="search..." />
        <span className="nav__icon search__icon">
          <AiOutlineSearch />
        </span>
      </div>
      <div className="customers__table">
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>User Id</th>
        <th>Date</th>
        <th>Costumers Name</th>
        <th>Location</th>
        <th>Total Spent</th>
        <th>Last Order</th>
        <th colSpan={2}>Action</th> 
        </tr>
      </thead>
      <tbody>
        {allOrders.map((order) => (
  <tr key={order.id}>
    <td>{order.id}</td>
    <td>{order.orderDate}</td>
    <td>{order.costumersName}</td>
    <td>{order.location}</td>
    <td>{order.totalSpent}</td>
    <td>{order.lastOrder}</td>
    <td className="set_status">
      <BsThreeDots className="status_icon" 
      onClick={() => orderStatus(order.id)} />
      {activeOrderId === order.id && (
              <div className="select_status">
              <Link to="/order" className="link_status">
                <FiAlertCircle className="link_icon view_icon" />
                View details  
              </Link>
              <Link className="link_status">
                <FiXCircle className="link_icon reject_icon" />
                Delete
              </Link>
            </div>
      )}

    </td>
  </tr>
))}

      </tbody>
    </table>
      </div>
      </div>
      </div>
  )
}

export default Customer;