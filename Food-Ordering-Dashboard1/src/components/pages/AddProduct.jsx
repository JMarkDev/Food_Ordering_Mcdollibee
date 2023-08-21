import { Button, Modal, ModalHeader, ModalBody, 
    Form, Input, Label, FormGroup} from 'reactstrap';  
import "../../styles/Products.css"
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Addproduct({modal, toggle, ...args}) {
    Addproduct.propTypes = {
        modal: PropTypes.any,
        toggle: PropTypes.func
    }
    const [title, setTitle] = useState("");
    const [image01, setImage01] = useState(null);
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [allCategory, setAllCategory] = useState([])

  const addProduct = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("images", image01);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);

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

  const handleCategory = async function() {
    const {data} = await axios.get('http://localhost:3001/api/category');
    console.log(data)
    setAllCategory(data)
  } 

  useEffect(() => {
    handleCategory()
  }, [])

  
  return (
    <div>     
    <Modal isOpen={modal} toggle={toggle} {...args} className="modal__body">
    <ModalHeader toggle={toggle}>Add Products</ModalHeader>
    <ModalBody>
    <Form onSubmit={addProduct}>
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

  {allCategory.map((categoryItem) => (
       <option key={categoryItem.id} value={categoryItem.id}>
        {categoryItem.title}
      </option>
  ))}


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
<Button className="save__btn" color="primary" type="submit">
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
  )
}

export default Addproduct;