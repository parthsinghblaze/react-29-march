import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./redux/listSlice";

function List() {
  const [inputValue, setInputValue] = useState("");
  const { listData } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  console.log("listData", listData);

  function handleClick() {
    dispatch(addItem(inputValue));
    setInputValue("");
  }

  return (
    <div className="container py-5">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn btn-primary my-3" onClick={handleClick}>
        Add
      </button>
      {listData.length === 0 && <h6>No Data</h6>}
      {listData.map((item, index) => {
        return <h6 key={index}>{item}</h6>;
      })}
    </div>
  );
}

export default List;
