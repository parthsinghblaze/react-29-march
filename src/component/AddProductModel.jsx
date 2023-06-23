import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Form, Formik, Field, ErrorMessage } from "formik";
import DialogTitle from "@mui/material/DialogTitle";
import { object, string, number } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";

function AddProductModel({ open, handleClose }) {
  const dispatch = useDispatch();
  const { addProductLoading, error } = useSelector((state) => state.product);
  const initialValues = {
    name: "",
    price: 0,
    category: "",
    qty: 0,
  };

  const validationSchema = object({
    name: string().required("Name is required."),
    price: number().required("Price is required."),
    category: string().required("Category is required."),
    qty: number().required("Qty is required."),
  });

  function formSubmit(value) {
    console.log("value", value);
    dispatch(addProduct({ formValue: value, handleClose: handleClose }));
  }

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <DialogTitle>Add your product</DialogTitle>
      {error}
      <DialogContent className="p-3">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={formSubmit}
        >
          {() => {
            return (
              <Form>
                <div className="mb-3">
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Product Name"
                  />
                  <ErrorMessage
                    className="text-danger mt-1"
                    name="name"
                    component="div"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price">Enter Price</label>
                  <Field
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Enter Price"
                  />
                  <ErrorMessage
                    className="text-danger mt-1"
                    name="price"
                    component="div"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    type="text"
                    name="category"
                    className="form-control"
                    placeholder="Enter Category"
                  />
                  <ErrorMessage
                    className="text-danger mt-1"
                    name="category"
                    component="div"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="qty">Enter Qty</label>
                  <Field
                    type="number"
                    name="qty"
                    className="form-control"
                    placeholder="Enter Qty"
                  />
                  <ErrorMessage
                    className="text-danger mt-1"
                    name="qty"
                    component="div"
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  {addProductLoading ? "Adding..." : "Submit"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default AddProductModel;
