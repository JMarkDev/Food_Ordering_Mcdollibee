import "../../styles/Products.css"
import {TbEdit} from "react-icons/tb"
import {RiDeleteBin5Line} from "react-icons/ri"
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, 
  Form, Input, Label, FormGroup, FormText } from 'reactstrap';

function Product(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='products'>
      <h3 className="products__title">Products</h3>
      <div className="product__btn">
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
      name="file"
      type="file"
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
    />
  </FormGroup>
  <Button className="save__btn" color="primary" onClick={toggle}>
            Save
  </Button>{' '}
</Form>
        </ModalBody>
      </Modal>
      </div>
      <div className="dashboard-table">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>Id</th>
        <th>Image</th>
        <th>Product name</th>
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