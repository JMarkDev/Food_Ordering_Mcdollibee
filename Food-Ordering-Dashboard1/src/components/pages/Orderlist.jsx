import {useState} from 'react';
import "../../styles/Order.css" 
import {BsThreeDots} from "react-icons/bs"
import {FiXCircle, FiCheckCircle, FiAlertCircle} from "react-icons/fi"
import { Link } from 'react-router-dom';

function Order() {
  const [activeOrderId, setActiveOrderId] = useState(null);

  const orderStatus = (orderId) => {
    setActiveOrderId((prevOrderId) => (prevOrderId === orderId ? null : orderId));
    document.body.classList.add("status");
  };

  const allOrders = [
    { id: 1,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Pending",
      amount: 100.00
    },
    { id: 2,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Cancelled",
      amount: 100.00
    },
    { id: 3,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Delivered",
      amount: 100.00
    },
    { id: 4,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Pending",
      amount: 100.00
    },
    { id: 5,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Cancelled",
      amount: 100.00
    },
    { id: 6,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Pending",
      amount: 100.00
    },
    { id: 7,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Pending",
      amount: 100.00
    },
    { id: 8,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Delivered",
      amount: 100.00
    },
    { id: 9,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Pending",
      amount: 100.00
    },
    { id: 10,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Pending",
      amount: 100.00
    }
  ]

  const getOrderStatusClass = (status) => {
    if (status === "Delivered") {
      return "delivered";
    } else if (status === "Pending") {
      return "pending";
    } else if (status === "Cancelled") {
      return "cancelled";
    }
    return ""; // empty string if status is unknown
  };

  return (
    <div className='orders'>
      <div className="dashboard-table">
        <div className='sort_orders dropdown'>
        <label htmlFor="sortDropdown">Sort By:</label>
        <select id="sortDropdown">
          <option value="">Default</option>
          <option value="date">Order Date</option>
          <option value="name">Customer Name</option>
          <option value="status">Status</option>
          {/* Add more sorting options as needed */}
        </select>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>Order Id</th>
        <th>Order Date</th>
        <th>Costumers Name</th>
        <th>Payment Method</th>
        <th>Status</th>
        <th>Amount</th>
        <th colSpan={2}>Action</th> 
        </tr>
      </thead>
      <tbody>
        {allOrders.map((order) => (
  <tr key={order.id}>
    <td>{order.id}</td>
    <td>{order.orderDate}</td>
    <td>{order.costumersName}</td>
    <td>{order.paymentMethod}</td>
    <td>
      <p className={`order_status ${getOrderStatusClass(order.status)}`}>
        {order.status}
      </p>
    </td>
    <td>{order.amount}</td>
    <td className="set_status">
      <BsThreeDots className="status_icon" 
      onClick={() => orderStatus(order.id)} />
      {activeOrderId === order.id && (
              <div className="select_status">
              <a href="#" className="link_status">
                <FiCheckCircle className="link_icon accept_icon" />
                Accept order
              </a>
              <a href="#" className="link_status">
                <FiXCircle className="link_icon reject_icon" />
                Reject order
              </a>
              <Link to="/order" className="link_status">
                <FiAlertCircle className="link_icon view_icon" />
                View order  
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
  );
}

export default Order;