import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

// import products from "../assets/products/products.js";
import axios from "axios";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    description: "Experience our superfast delivery for food delivered fresh & on time.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    description: "Serve great-tasting food, bringing the joy of eating to everyone.",
  },
  {
    title: "Order Now",
    imgUrl: featureImg03,
    description: "Order in for yourself or for the group, with no restrictions on order value.",
  },
];

const Home = (props) => {
  //CONNECT TO SERVER
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [allCategory, setAllCategory] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  // const { id, title, image} = props.category;
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const {data} = await axios.get("http://localhost:3001/api/products");
      setProducts(data);
      setAllProducts(data);
    };
    fetchProducts();
  }, [category]);
  
  useEffect(() => {
    const fetchCategory = async() => {
        const {data} = await axios.get("http://localhost:3001/api/category");
        setAllCategory(data);
      };
    fetchCategory();
  }, []);
  
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [products]);

  const handleCategoryClick = (clickedCategory) => {
    setCategory(clickedCategory);
  };
  
  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    } else {
      const filteredProducts = products.filter((item) => item.category === category);
      setAllProducts(filteredProducts);
    }
  }, [category, products]);



  return (
    <Helmet title="Home">
      <Header />
      <section className="section-home">
        <Container className="banner">
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  HUNGRY? Just wait <br />
                  <span>food at your door</span>
                </h1>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">

                  <button className="all__foods-btn">
                    <Link to="/products">Order now</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 " >
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    ₱30 shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              
              </p>
              <p className="feature__text">
              Know where your order is at all times, from the restaurant to your doorstep.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3"/>
                  <h5 className="mb-3 feature_title">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
              <button onClick={() => handleCategoryClick("All")}>
              All
            </button>
            {allCategory.map((item) => (
            <button
              className={`d-flex align-items-center gap-2 ${category === item.title ? "foodBtnActive" : ""}`}
              onClick={() => {handleCategoryClick(item.title)}}
              key={item.id}
            >
              <img src={`http://localhost:3001/${item.image}`} alt="" />
              {item.title}
            </button>
          ))}
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span className="why">McDo</span><span>llibee</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Fastest Delivery{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
      </section>
      <Footer />
    </Helmet>
  );
};

export default Home;
