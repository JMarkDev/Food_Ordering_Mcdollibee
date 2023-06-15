import { useEffect, useState } from "react";
import "../../styles/Dashboard.css";
import { FaUsers } from "react-icons/fa";
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import RevenueImg from "../../assets/images/revenue.png"
import OrdersImg from "../../assets/images/order.png"
// import viewIcon from "../../assets/images/file.png"
// import {RiDeleteBin5Line} from "react-icons/ri"
import {BsThreeDots} from "react-icons/bs"
// import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import {FiXCircle, FiCheckCircle, FiAlertCircle} from "react-icons/fi"
// import {CiCircleInfo} from "react-icons/ci"

function Dashboard() {
  const [activeOrderId, setActiveOrderId] = useState(null);

  const orderStatus = (orderId) => {
    setActiveOrderId((prevOrderId) => (prevOrderId === orderId ? null : orderId));
    document.body.classList.add("status");
  };

  const recentOrders = [
    { id: 1,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Delivered",
      amount: 100.00
    }, 
    { id: 2,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Pending",
      amount: 100.00
    },
    { id: 3,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Canceled",
      amount: 100.00
    },
    { id: 4,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Canceled",
      amount: 100.00
    },
    { id: 5,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Canceled",
      amount: 100.00
    }
  ]

  const getOrderStatusClass = (status) => {
    if (status === "Delivered") {
      return "delivered";
    } else if (status === "Pending") {
      return "pending";
    } else if (status === "Canceled") {
      return "cancelled";
    }
    return ""; // empty string if status is unknown
  };

  return (
    <>
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
          <p className='card-title'>Orders</p>
          <h2 className='total'>100k</h2>
        </div>
      </div>
      <div className='cards'>
        <div className='card-icon'>
          <FaUsers className='icon' />
        </div>
        <div>
          <p className='card-title'>Costumer</p>
          <h2 className='total'>100k</h2>
        </div>
      </div>
      <div className='cards'>
        <div className='card-icon'>
          <img className="card__img" src={RevenueImg} alt="revenue image" />
        </div>
        <div>
          <p className='card-title'>Revenue</p>
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
        <th>Order Date</th>
        <th>Costumers Name</th>
        <th>Payment Method</th>
        <th>Status</th>
        <th>Amount</th>
        <th colSpan={2}>Action</th> 
        </tr>
      </thead>
      <tbody>
        {recentOrders.map((order) => (
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
              <a href="#" className="link_status">
                <FiAlertCircle className="link_icon view_icon" />
                View order
              </a>
            </div>
      )}

    </td>
  </tr>
))}

      </tbody>
    </table>
    </div>
    </>
  );
}

export default Dashboard;
