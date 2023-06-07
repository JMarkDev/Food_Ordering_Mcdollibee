import "../../styles/Products.css"
import {TbEdit} from "react-icons/tb"
import {RiDeleteBin5Line} from "react-icons/ri"

function Product() {
  return (
    <div className='products'>
      <h3 className="products__title">Products</h3>
      <div className="product__btn">
          <a className="add__product--btn">Add Product</a>
      </div>
      <div className="dashboard-table">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>Id</th>
        <th>Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Description</th>
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
          <td>Data 5</td>
          <td className="table__icon">
            <button className="edit-btn">
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn">
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
            </button>
            </td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 5</td>
          <td className="table__icon">
            <button className="edit-btn">
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn">
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
            </button>
            </td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 5</td>
          <td className="table__icon">
            <button className="edit-btn">
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
              <button className="delete-btn">
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
            </button>
            </td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 5</td>
          <td className="table__icon">
            <button className="edit-btn">
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn">
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
            </button>
            </td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 5</td>
          <td className="table__icon">
            <button className="edit-btn">
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn">
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
            </button>
            </td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 5</td>
          <td className="table__icon">
            <button className="edit-btn">
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn">
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
            </button>
            </td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default Product