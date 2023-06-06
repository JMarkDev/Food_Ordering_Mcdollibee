import React from 'react';
import "../../styles/Dashboard.css";
import { FaUsers } from "react-icons/fa";

function Dashboard() {
  return (
    <div className='dashboard'>
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
      <div>
        
      </div>
    </div>
  );
}

export default Dashboard;
