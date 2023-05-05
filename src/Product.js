import React from "react";
import ProductDetails from "./ProductDetails";

function Product() {
  return (
    <div className="container py-5">
      <div className="row">
        <ProductDetails name="Iphone" price="2000" />
        <ProductDetails name="Samsung" price="1000" />
        <ProductDetails name="Nokia" price="11000" />
        <ProductDetails name="MI" price="2000" />
        <ProductDetails name="Oneplus" price="1000" />
        <ProductDetails name="Oppo" price="19000" />
      </div>
    </div>
  );
}

export default Product;
