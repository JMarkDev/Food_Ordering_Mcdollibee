
import {TbEdit} from "react-icons/tb"
import {RiDeleteBin5Line} from "react-icons/ri"
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, 
  Form, Input, Label, FormGroup} from 'reactstrap'; 
import "../../styles/Category.css" 
import image from "../../assets/images/5ceef7edbe1b196a030952b773b9636e.jpeg"

function Category(args) {
  const [modal, setModal] = useState(false);
  const categories = [
    { id: 1,
      image: image,
      title: "Burger"
    },
    { id: 2,
      image: image,
      title: "Pizza"
    },
    { id: 3,
      image: image,
      title: "Chicken"
    },
    { id: 4,
      image: image,
      title: "Milktea"
    },
    { id: 5,
      image: image,
      title: "Fries"
    }
  ]

  const toggle = () => setModal(!modal);
  return (
    <> 
    <div className='category products'>
      <div className="product__btn category">
      <Button color="primary" className="add__category--btn" onClick={toggle}>
        Add category
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} className="modal__body">
        <ModalHeader toggle={toggle}>Add category</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
          <Label for="productName">
            Category name
          </Label>
          <Input
            id="categoryName"
            name="name"
            placeholder="Category name"
            type="text"
          />
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
  <div className="modal__btn">
  <Button className="save__btn" color="primary" onClick={toggle}>
            Save
  </Button>
  <Button className="discard__btn" color="primary" onClick={toggle}>
            Discard
  </Button>
  </div>
</Form>
        </ModalBody>
      </Modal>
      <div className="category__table">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>Category Id</th>
        <th>Image</th>
        <th>Title</th>
        <th colSpan={2}>Action</th> 
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <tr key={category.id}>
          <td>{category.id}</td>
          <td><img className="category_img" src={category.image} alt="category image" /></td>
          <td>{category.title}</td>
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
        ))}
      </tbody>
    </table>
    </div>
      </div>
    </div>
    </>
  )
}

export default Category