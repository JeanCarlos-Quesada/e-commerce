import React from "react";

/*Components*/
import Product from "../../components/Product/Product";

/*Hooks*/
import useProduct from "../../hooks/useProduct";

const ProductList = () => {
  const { GetMostPopular } = useProduct();

  const [products, saveProducts] = React.useState([]);

  React.useEffect(() => {
    GetMostPopular().then((products) => {
     saveProducts(products);
    });
  }, []);

  return (
    <ul className='product-list'>
      {products.map((item) => {
        return (
          <li key={`most_popular_${item.id}`}>
            <Product id={item.id} name={item.name} details={item.details} price={item.price} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
