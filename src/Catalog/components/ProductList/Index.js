import React from "react";
import Product from "../../../components/Product/Product";
import "./productList_style.css";

const ProductList = ({ products, title }) => {
  return (
    <div className='container-catalog'>
      <h2 className='title'>{`${title} Products`}</h2>
      <div>
        {products.map((item, index) => {
          return (
            <Product
              id={item.id}
              name={item.name}
              details={item.details}
              price={item.price}
              key={`catalog-product-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
