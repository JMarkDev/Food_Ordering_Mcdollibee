import React, { useEffect, useState } from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { AiFillStar } from "react-icons/ai";

const ProductCard = (props) => {
  const { id, title, image01, price, rating } = props.item;
  const dispatch = useDispatch();
  const [displayRating, setDisplayRating] = useState("");

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  useEffect(() => {
    let rating = 5;
    let newRating = [];
    for (let i = 0; i < Math.floor(rating); ++i) {
      newRating.push(<AiFillStar key={i} />);
    }
    if (!Number.isInteger(rating)) {
      newRating.push(<AiFillStar key="half" />);
    }
    setDisplayRating(newRating);
  }, [rating]);

  return (
    <div className="product__item">
      <div className="product__img">
        <Link to={`/products/${id}`}>
          <img src={`http://localhost:3001/${image01}`} alt="product-img" className="w-50" />
        </Link>
      </div>

      <div className="product__content">
        <h5>{title}</h5>
        <div className="card__section">
          <div className="card__section1">
            <span className="product__price">₱{price}.00</span>
            <span className="rating">{displayRating}</span>
          </div>
          <button className="addTOCart__btn addTOCart__btn1" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
