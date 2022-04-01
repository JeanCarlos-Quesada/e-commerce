import React from "react";
import "../../sources/homePage.css";

/*Components*/
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <h2 className="title">Most Popular Products</h2>
      <ProductList />
    </React.Fragment>
  );
};

export default HomePage;
