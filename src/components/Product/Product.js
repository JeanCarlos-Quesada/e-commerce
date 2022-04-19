import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItemToCart } from "../../actions/CartActions";
import { showMessage, hiddenMessage } from "../../actions/UtilitiesActions";
import "./product_style.css";

const Product = ({ id, name, details, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(setItemToCart({ id, name, details, price, amount: 1 }));
    dispatch(showMessage("Product Register"));
    /*hidden message*/
    setTimeout(() => {
      dispatch(hiddenMessage());
    }, 2100);
  };

  return (
    <React.Fragment>
      <div className='product'>
        <Link to={`/Catalog/Product?code=${id}`}>
          <img
            src='https://mir-s3-cdn-cf.behance.net/projects/404/9c5c9471006127.Y3JvcCwxMTQxLDg5Myw2Nyww.png'
            alt='Product Image'
          />
        </Link>
        <div className='product-details'>
          <label>{name}</label>
          <p>{details}</p>
          <div>
            <span className='product-details-price mr-auto'>{`$${price}`}</span>
            <button
              className='btn btn-product-details ml-auto'
              onClick={addToCart}
            >
              Add to Car
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
