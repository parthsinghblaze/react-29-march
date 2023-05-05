import React from "react";

function ProductDetails(props) {
  const { name, price } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Price: {price}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
