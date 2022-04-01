import React from "react";
import Product from "../../../components/Product";
import "./productList_style.css";

const ProductList = ({products}) => {
  return (
    <div className="container-catalog">
      <h2 className="title">All Products</h2>
      <div>
        {products.map(
          (item, index) => {
            return (
              <Product
                name={item.name}
                price={item.price}
                key={`catalog-product-${index}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductList;
