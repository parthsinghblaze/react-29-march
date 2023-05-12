import React, { useEffect } from "react";

function Image() {
  useEffect(() => {
    console.log("Image component has been mounted");

    // destroy
    return () => {
      console.log("Image component has been unmounted");
    };
  }, []);

  return (
    <div className="container">
      <h1>I am Image component</h1>
    </div>
  );
}

export default Image;
