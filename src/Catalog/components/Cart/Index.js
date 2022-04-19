import React from "react";
import { useDispatch } from "react-redux";
import { setItemToCart, removeItemToCart, deleteItemToCart } from "../../../actions/CartActions";
import "./cart_style.css";

const CartProduct = ({ id, image, name, details, price, count }) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(setItemToCart({ id, name, details, price, amount: 1 }));
  };

  const removeProduct = () => {
    dispatch(removeItemToCart(id));
  };

  const deleteProduct = () => {
    dispatch(deleteItemToCart(id));
  };

  return (
    <div className='cart-product'>
      <div className='product-image'>
        <img src='https://mir-s3-cdn-cf.behance.net/projects/404/9c5c9471006127.Y3JvcCwxMTQxLDg5Myw2Nyww.png' />
      </div>
      <div className='product-cart-details'>
        <h1>{name}</h1>
        <p>{details}</p>
        <span>{`$${price}`}</span>
        <div>
          <span className='trash' title='Delete Product' onClick={deleteProduct}>
            <svg
              width='21'
              height='22'
              viewBox='0 0 21 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.17156 1.9413H5.95875C6.0758 1.9413 6.17156 1.84424 6.17156 1.7256V1.9413H14.2584V1.7256C14.2584 1.84424 14.3542 1.9413 14.4712 1.9413H14.2584V3.8826H16.1737V1.7256C16.1737 0.773824 15.4103 0 14.4712 0H5.95875C5.01971 0 4.25625 0.773824 4.25625 1.7256V3.8826H6.17156V1.9413ZM19.5788 3.8826H0.85125C0.380402 3.8826 0 4.26816 0 4.7454V5.6082C0 5.72684 0.0957656 5.8239 0.212812 5.8239H1.81955L2.47661 19.9253C2.51917 20.8447 3.26933 21.57 4.17645 21.57H16.2536C17.1633 21.57 17.9108 20.8474 17.9534 19.9253L18.6105 5.8239H20.2172C20.3342 5.8239 20.43 5.72684 20.43 5.6082V4.7454C20.43 4.26816 20.0496 3.8826 19.5788 3.8826ZM16.0487 19.6287H4.38128L3.73752 5.8239H16.6925L16.0487 19.6287Z'
                fill='#C80000'
              />
            </svg>
          </span>
          <div className='product-count'>
            <span
              className='mr-auto'
              title='Delete One'
              onClick={removeProduct}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 1H16C16.5523 1 17 1.44772 17 2V16C17 16.5523 16.5523 17 16 17H2C1.44772 17 1 16.5523 1 16V2C1 1.44772 1.44772 1 2 1Z'
                  stroke='currentColor'
                  stroke-width='2'
                />
                <path
                  d='M14.25 9C14.25 9.41421 13.9142 9.75 13.5 9.75H4.5C4.08579 9.75 3.75 9.41421 3.75 9V9C3.75 8.58579 4.08579 8.25 4.5 8.25H13.5C13.9142 8.25 14.25 8.58579 14.25 9V9Z'
                  fill='currentColor'
                />
              </svg>
            </span>
            <div className='center-vh-div'>
              <p>{count}</p>
            </div>
            <span className='ml-auto' title='Add One' onClick={addProduct}>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM8 14H10V10H14V8H10V4H8V8H4V10H8V14Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
