import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  emptyErrorMessage,
  fetchProduct,
  searchProduct,
} from "../redux/productSlice";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddProductModel from "../component/AddProductModel";
import EditProductModel from "../component/EditProductModel";

function Products() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [searchText, setSearchText] = useState("");

  const { loading, productList, filterProductList } = useSelector(
    (state) => state.product
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleEditOpen = (values) => {
    setEditValue(values);
    setEditOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(emptyErrorMessage());
  };

  const editHandleClose = () => {
    setEditOpen(false);
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  useEffect(() => {
    if (searchText) {
      dispatch(searchProduct(searchText));
    }
  }, [searchText]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container py-5">
      {/* ================== MODEL ============================= */}

      <AddProductModel open={open} handleClose={handleClose} />

      {/* ==================== EDIT MODEL ======================= */}
      <EditProductModel
        editOpen={editOpen}
        editHandleClose={editHandleClose}
        editValue={editValue}
      />

      <div className="mb-5 d-flex justify-content-between gap-5">
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-25"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
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
          {filterProductList &&
            filterProductList.map((item, index) => {
              const { _id, name, qty, price, category } = item;
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>{qty}</td>
                  <td>
                    <IconButton
                      color="error"
                      onClick={() => dispatch(deleteProduct({ id: _id }))}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      color="warning"
                      onClick={() => handleEditOpen(item)}
                    >
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
