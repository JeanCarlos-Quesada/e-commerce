import React from "react";

/*Components*/
import Filters from "../components/Filters/Index";
import ProductList from "../components/ProductList/Index";

const Catalog = () => {
  const [title, saveTitle] = React.useState("All Products");
  const [state, saveState] = React.useState({
    categories: [
      {
        id: "0",
        name: "All",
      },
      {
        id: "1",
        name: "Sport",
      },
      {
        id: "2",
        name: "Casual",
      },
      {
        id: "3",
        name: "Formal",
      },
    ],
    products: [
      {
        id: "0",
        name: "Test1",
        details: 'details',
        category: "1",
        price: 99.99,
      },
      {
        id: "2",
        name: "Test2",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "3",
        name: "Test3",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "4",
        name: "Test4",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "5",
        name: "Test5",
        details: 'details',
        category: "1",
        price: 15.99,
      },
      {
        id: "6",
        name: "Test6",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "7",
        name: "Test7",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "8",
        name: "Test8",
        details: 'details',
        category: "2",
        price: 17.99,
      },
    ],
    filterProducts: [
      {
        id: "0",
        name: "Test1",
        details: 'details',
        category: "1",
        price: 99.99,
      },
      {
        id: "2",
        name: "Test2",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "3",
        name: "Test3",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "4",
        name: "Test4",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "5",
        name: "Test5",
        details: 'details',
        category: "1",
        price: 15.99,
      },
      {
        id: "6",
        name: "Test6",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "7",
        name: "Test7",
        details: 'details',
        category: "2",
        price: 50.99,
      },
      {
        id: "8",
        name: "Test8",
        details: 'details',
        category: "2",
        price: 17.99,
      },
    ],
  });

  return (
    <React.Fragment>
      <Filters state={state} saveState={saveState} saveTitle={saveTitle}/>
      <ProductList products={state.filterProducts} title={title}/>
    </React.Fragment>
  );
};

export default Catalog;
