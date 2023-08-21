import { Button, 
    Form, Input, Label, FormGroup} from 'reactstrap';  
import "../../styles/Products.css"
import { useState } from 'react';
import PropTypes from 'prop-types';
import {useParams , useNavigate, Link} from "react-router-dom"
import axios from "axios"
import { useEffect } from 'react';

function EditProduct({toggle}) {
    EditProduct.propTypes = {
        modalEdit: PropTypes.any,
        toggle: PropTypes.func
    }

    const navigate = useNavigate()

    let {id} = useParams()
    console.log(id)

    const [title, setTitle] = useState("");
    const [image01, setImage01] = useState(null);
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [allCategory, setAllCategory] = useState([])

    const handleData = async function() {
        const { data } = await axios.get(`http://localhost:3001/api/products/${id}`);
        console.log(data)
        setTitle(data.title)
        setImage01(data.image01)
        setPrice(data.price)
        setCategory(data.category)
        setDescription(data.description)
    }

    useEffect(() => {
        handleData();
    }, [])

    const handleCategory = async function() {
      const {data} = await axios.get('http://localhost:3001/api/category');
      console.log(data)
      setAllCategory(data)
    } 
  
    useEffect(() => {
      handleCategory()
    }, [])
  

    const handleSubmit = async function (e) {
        e.preventDefault();

        const updateDetais = {
            title: title,
            image01: image01,
            price: price,
            category: category,
            description: description,
        }

        try{
            await axios.put(`http://localhost:3001/api/products/edit/${id}`, updateDetais);
            navigate('/products')
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='edit_product'>
      <div className='back__btn'>
        <Button color="primary">
          <Link to="/products" className='back'>
            Back
          </Link>
        </Button>
      </div>
    <h1>Update Product</h1>
    <Form onSubmit={handleSubmit}>
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
    </div>
  )
}

export default EditProduct