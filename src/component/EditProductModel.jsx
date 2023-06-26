import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Form, Formik, Field, ErrorMessage } from "formik";
import DialogTitle from "@mui/material/DialogTitle";
import { object, string, number } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/productSlice";

function EditProductModel({ editOpen, editHandleClose, editValue }) {
  const dispatch = useDispatch();
  const { addProductLoading, error } = useSelector((state) => state.product);
  const initialValues = editValue;

  const validationSchema = object({
    name: string().required("Name is required."),
    price: number().required("Price is required."),
    category: string().required("Category is required."),
    qty: number().required("Qty is required."),
  });

  function formSubmit(value) {
    dispatch(
      updateProduct({ formValue: value, editHandleClose: editHandleClose })
    );
  }

  return (
    <Dialog maxWidth="sm" fullWidth open={editOpen} onClose={editHandleClose}>
      <DialogTitle>Update your product</DialogTitle>
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
                  {addProductLoading ? "Adding..." : "Update"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default EditProductModel;
