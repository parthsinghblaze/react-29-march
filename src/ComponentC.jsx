import React, { useContext } from "react";
import { UserDetails } from "./App";

function ComponentC() {
  const context = useContext(UserDetails);
  console.log(context);
  return (
    <div>
      <h1>User Name :- {context.userName}</h1>
      <h4>Total Balance: {context.totalAmount}</h4>
    </div>
  );
}

export default ComponentC;
