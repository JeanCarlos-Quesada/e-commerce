import React from "react";
import { useSelector } from "react-redux";

/*Components*/
import CartProduct from "../components/Cart/Index";

const Cart = () => {
  const products = useSelector((state) => state.cartReducer.list);

  return (
    <div className='form'>
      <h2 className='title'>Cart Products List</h2>
      {products.map((item, index) => {
        return (
          <CartProduct
            id={item.id}
            image={null}
            name={item.name}
            details={item.details}
            price={item.price}
            count={item.count}
            amountInInventory={item.amountInInventory}
            key={`product_${index}`}
          />
        );
      })}
      <div className='ml-auto'>
        <button
          className='btn btn-default-hover btn-cancel mr-2'
          onClick={null}
        >
          Cancel
        </button>
        <button className='btn btn-default-hover' onClick={null}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default Cart;
