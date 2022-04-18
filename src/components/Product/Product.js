import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItemToCart } from "../../actions/CartActions";
import { showMessage, hiddenMessage } from "../../actions/MessageActions";
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
          {" "}
          <img
            src='http://cdn.shopify.com/s/files/1/0204/0483/0283/products/TR3MLUN_SHOE_ANGLE_GLOBAL_TREE_RUNNER_LUNA_WHITE_600x600.png?v=1619568174'
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
