import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { emptyErrorMessage, fetchProduct } from "../redux/productSlice";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddProductModel from "../component/AddProductModel";

function Products() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { loading, productList } = useSelector((state) => state.product);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(emptyErrorMessage());
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container py-5">
      {/* ================== MODEL ============================= */}

      <AddProductModel open={open} handleClose={handleClose} />

      <div className="text-end mb-5">
        <Button
          variant="contained"
          size="medium"
          className="text-capitalize"
          onClick={handleClickOpen}
        >
          Add Product
        </Button>
        {/* <button className="btn btn-primary btn-sm">Add Product</button> */}
      </div>

      {/* ===================== TABLE =============================== */}
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
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="warning">
                      <EditIcon />
                    </IconButton>
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
