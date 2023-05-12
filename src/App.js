import { useEffect, useState } from "react";
import Image from "./component/Image";

function App() {
  const [number, setNumber] = useState(0);
  const [imageShowing, setImageShowing] = useState(false);

  useEffect(() => {
    // when ever you component mount / yaa fir jab mera component load ho jae ga tab useEffect run hoga
    console.log("App component has been mounted!");
  }, []);

  return (
    <div className="container">
      <h1>Use Effect</h1>
      <h3>{number}</h3>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>
        -
      </button>
      <button onClick={() => setImageShowing(!imageShowing)}>Hide/show</button>
      {
        imageShowing ? <Image /> : null 
      }
    </div>
  );
}

export default App;
