import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";

function Products() {
  const dispatch = useDispatch();

  const { loading, productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container py-5">
      <div className="text-end mb-5">
        <button className="btn btn-primary btn-sm">Add Product</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList &&
            productList.map((item, index) => {
              const { name, qty, price, category } = item;
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>{qty}</td>
                  <td>
                    <button className="btn btn-sm btn-danger me-3">
                      Delete
                    </button>
                    <button className="btn btn-sm btn-warning">Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
