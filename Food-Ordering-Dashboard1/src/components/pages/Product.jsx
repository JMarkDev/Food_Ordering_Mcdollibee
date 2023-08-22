import { useEffect, useState } from 'react';
import "../../styles/Products.css"
import {TbEdit} from "react-icons/tb"
import {RiDeleteBin5Line} from "react-icons/ri"
import { Button } from 'reactstrap';  
import axios from "axios"
import Addproduct from './Addproduct';
import { Link } from 'react-router-dom';

function Product() {
  const [modal, setModal] = useState(false);

  const [data, setData] = useState([])

  const handleData = async () => {
    const { data } = await axios.get('http://localhost:3001/api/products');
    console.log(data)
    setData(data)
  }

  const handleDelete = async (id) => {
    const {data} = await axios.delete(`http://localhost:3001/api/products/delete/${id}`);
    console.log(data);  
    handleData()
  }

  useEffect(() => {
    handleData();
  }, [])

  return (
    <div className='products'>
      <form action="">
      <div className="product__btn product__options">
      <Button color="primary" className="add__product--btn" onClick={() => setModal(true)}>
        Add product
      </Button>
      <Addproduct modal={modal} toggle={() => setModal(!modal)} />
      </div>
      </form>
     
      <div className="dashboard-table">
        <div className='sort_orders dropdown'>
        <label htmlFor="sortDropdown">Sort By:</label>
        <select id="sortDropdown">
        <option value="default">Default</option>
          <option value="ascending">Low to high</option>
          <option value="descending">High to low</option>
          <option value="ratings">Ratings</option>
        </select>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>Product Id</th>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Category</th>
        <th>Description</th>
        <th>Ratings</th>
        <th colSpan={2}>Action</th> 
        </tr>
      </thead>
      <tbody>
        {data.map(product => (
          <tr key={product.id}>
          <td>{product.id}</td>
          <td><img className="product_img" src={product.image01} alt="" /></td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>{product.ratings}</td>
          <td className="table__icon">
            <button className="edit-btn"> 
              <Link
                      to={`/editproduct/${product.id}`}
                      className="text-decoration-none"
                    >
                      <TbEdit className="tbl__icon--edit"/>
                      {/* Edit */}
                    </Link>
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn" onClick={() => handleDelete(product.id)}>
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                {/* Delete */}
            </button>
            </td>
        </tr>
        ))}
        
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default Product