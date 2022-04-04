import React from "react";

/*Components*/
import Product from "../../components/Product/Product";

const ProductList = () => {
  return (
    <ul className='product-list'>
      {[0, 1, 2, 3, 4].map((item) => {
        return (
          <li key={item}>
            <Product id={item} name={item} details={item} price={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
