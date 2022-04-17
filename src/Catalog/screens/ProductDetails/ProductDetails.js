import React from "react";
import "./productDetails_style.css";

/*Components*/
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import ProductSelectColor from "../../components/ProductSelectColor/ProductSelectColor";

const ProductDetails = () => {
  return (
    <React.Fragment>
      <ProductBanner />
      <div className="product-information">
        <h2 className="title">Product Name</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="sub-details">
        <h1>Colors</h1>
        {["#4287f5", "#420a70", "#000000", "#FFFFFF"].map((item, index) => {
          return <ProductSelectColor color={item} key={`color_${index}`} />;
        })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
