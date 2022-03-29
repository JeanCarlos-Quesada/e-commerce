import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemToCart } from "../actions/CartActions";

const Product = () => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(setItemToCart(1));
  };

  return (
    <div className='product'>
      <img
        src='http://cdn.shopify.com/s/files/1/0204/0483/0283/products/TR3MLUN_SHOE_ANGLE_GLOBAL_TREE_RUNNER_LUNA_WHITE_600x600.png?v=1619568174'
        alt='Product Image'
      />
      <div className='product-details'>
        <label>Product Name</label>
        <div>
          <span className='product-details-price mr-auto'>$99.99</span>
          <button
            className='btn btn-product-details ml-auto'
            onClick={addToCart}
          >
            Add to Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
