import React from "react";

/*Components*/
import Product from "./Product";

const ProductList = () => {
  return (
    <ul className="product-list">
      {[0, 1, 2, 3, 4].map((item) => {
        return (
          <li>
            <Product />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
