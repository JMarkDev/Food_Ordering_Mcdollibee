import { useState } from "react";
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
  const [status, setStatus] = useState(false);

  const orderStatus = () =>{
    setStatus(!status)
    document.body.classList.toggle("status")
    console.log('cute')
  };

  const recentOrder = [
    { id: 1,
      orderDate: "January 01 2023",
      costumersName: "Josiel Mark Cute",
      paymentMethod: "Cash",
      status: "Delivered",
      amount: 100.00
    }, 
    // { id: 1,
    //   orderDate: "January 01 2023",
    //   costumersName: "Josiel Mark Cute",
    //   paymentMethod: "Cash",
    //   status: "Pending",
    //   amount: 100.00
    // },
    // { id: 3,
    //   orderDate: "January 01 2023",
    //   costumersName: "Josiel Mark Cute",
    //   paymentMethod: "Cash",
    //   status: "Canceled",
    //   amount: 100.00
    // }
  ]

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
        {recentOrder.map(order => (
            <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.orderDate}</td>
            <td>{order.costumersName}</td>
            <td>{order.paymentMethod}</td>
            <td className="order_status">{order.status}</td>
            <td>{order.amount}</td>
            <td className="set_status">
              <BsThreeDots className="status_icon" onClick={orderStatus}/>
              <div className="select_status" >
                {/* <select name="status" id="status"> */}
                <a href="#" className="link_status"><FiCheckCircle className="link_icon accept_icon"/>Accept order</a>
                <a href="#" className="link_status"><FiXCircle className="link_icon reject_icon"/>Reject order</a>
                <a href="#" className="link_status"><FiAlertCircle className="link_icon view_icon"/>View order</a>
                  {/* <option value="accept">Accept order</option>
                  <option value="reject">Reject order</option>
                  <option value="view">View order</option> */}
                {/* </select> */}
              </div>
             
              {/* <button className="edit-btn">
                <img className="viewIcon" src={viewIcon} alt="view" />
                  View
              </button>
              <button className="delete-btn">
                  <RiDeleteBin5Line className="tbl__icon--delete"/>
                  Delete
              </button> */}
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
