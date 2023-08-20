import { useEffect, useState } from 'react';
import "../../styles/Products.css"
import {TbEdit} from "react-icons/tb"
import {RiDeleteBin5Line} from "react-icons/ri"
import { Button, Modal, ModalHeader, ModalBody, 
  Form, Input, Label, FormGroup} from 'reactstrap';  
import axios from "axios"

function Product(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [data, setData] = useState([])
  const [title, setTitle] = useState("");
  const [image01, setImage01] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // const [ratings, setRatings] = useState("");

  const addProduct = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("images", image01);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    // formData.append("ratings", ratings);

    fetch('http://localhost:3001/api/upload', {
      method: "POST", 
      body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      alert("Added Successfully") 
    })
  };

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
      <form action="" onSubmit={addProduct}>
      <div className="product__btn product__options">
      <Button color="primary" className="add__product--btn" onClick={toggle}>
        Add product
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} className="modal__body">
        <ModalHeader toggle={toggle}>Add Products</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
          <Label for="productName">
            Product name
          </Label>
          <Input
            id="productName"
            name="name"
            placeholder="Product name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productPrice">
            Price
          </Label>
          <Input
            id="productName"
            name="name"
            placeholder="Product price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
    <Label for="category">
      Category
    </Label>
    <Input
      id="category"
      name="select"
      type="select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>
        Burger
      </option>
      <option>
        Pizza
      </option>
      <option>
        Drinks
      </option>
    
    </Input>
  </FormGroup>
  <FormGroup>
  </FormGroup>
  <FormGroup>
    <Label for="image">
      Image
    </Label>
    <Input
      id="image"
      name="images"
      type="file"
      onChange={(e) => setImage01(e.target.files[0])}
    />
  </FormGroup>
  <FormGroup>
    <Label for="description">
      Description
    </Label>
    <Input
      id="description"
      name="text"
      type="textarea"
      placeholder="type here..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </FormGroup>
  <div className="modal__btn">
  <Button className="save__btn" color="primary" onClick={toggle} type="submit">
            Save
  </Button>
  <Button className="discard__btn" color="primary" onClick={toggle}>
            Discard
  </Button>
  </div>
</Form>
        </ModalBody>
      </Modal>
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
          {/* Add more sorting options as needed */}
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
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn" onClick={() => handleDelete(product.id)}>
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
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