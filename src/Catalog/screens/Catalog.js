import React from "react";

/*Components*/
import Filters from "../components/Filters/Index";
import ProductList from "../components/ProductList/Index";

const Catalog = () => {
  const [state, saveState] = React.useState({
    categories: [
      {
        id: "0",
        name: "All",
        isCheck: true,
      },
      {
        id: "1",
        name: "Sport",
        isCheck: false,
      },
      {
        id: "2",
        name: "Casual",
        isCheck: false,
      },
      {
        id: "3",
        name: "Formal",
        isCheck: false,
      },
    ],
    products: [
      {
        id: "0",
        name: "Test1",
        categorie: "1",
        price: 99.99,
      },
      {
        id: "2",
        name: "Test2",
        categorie: "2",
        price: 50.99,
      },
    ],
    filterProducts: [
      {
        id: "0",
        name: "Test1",
        categorie: "1",
        price: 99.99,
      },
      {
        id: "2",
        name: "Test2",
        categorie: "2",
        price: 50.99,
      },
    ],
  });

  return (
    <React.Fragment>
      <Filters state={state} saveState={saveState} />
      <ProductList products={state.filterProducts} />
    </React.Fragment>
  );
};

export default Catalog;
