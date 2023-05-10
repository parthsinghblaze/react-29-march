import { useState } from "react";

function App() {
  // useState is a function which will return an array ;
  // 1 -> initialValue
  // 2 -> function this function will change the initialValue

  const [userName, setUserName] = useState("Kalpesh");
  const [number, setNumber] = useState(0);
  const [isShowing, setIsShowing] = useState(true);
  const [profileDetails, setProfileDetails] = useState({
    firstName: "Rahul",
    lastName: "Prajapati",
    age: 21,
  });
  const [friendsList, setFriendsList] = useState([
    "Nikhil",
    "Tahid",
    "Abhi",
    "Namrata",
    "Durgesh",
    "Yuvraj",
  ]);

  function changeData() {
    setProfileDetails({
      ...profileDetails,
      firstName: "Nikhil",
    });
  }

  const [formValue, setFormValue] = useState("");

  function addFriend() {
    setFriendsList([...friendsList, formValue]);
    setFormValue("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 my-5 shadow">
          <div className="card">
            <div className="card-header">
              <h3>
                Friends Lists{" "}
                <span className="badge bg-danger"> {friendsList.length} </span>{" "}
              </h3>
            </div>
            <div className="card-body">
               <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className="form-control" placeholder="Enter Your Friends..." />
               <button onClick={addFriend}>Add</button>
            </div>
            <div className="card-body">
              {friendsList.map((item, index) => {
                return <h3 key={index}>{item}</h3>;
              })}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => setFriendsList([])}
              >
                Clear
              </button>
              <button
                className="btn btn-primary ms-5"
                onClick={() =>
                  setFriendsList([
                    "Nikhil",
                    "Tahid",
                    "Abhi",
                    "Namrata",
                    "Durgesh",
                    "Yuvraj",
                  ])
                }
              >
                Show All
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 offset-md-4 my-5 shadow">
          <div className="card">
            <div className="card-header">
              <h3>Profile</h3>
            </div>
            <div className="card-body">
              <h4>First Name: {profileDetails.firstName}</h4>
              <h5>Last Name: {profileDetails.lastName}</h5>
              <h5>Age: {profileDetails.age}</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={changeData}>
                Change Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2>Boolean</h2>
      <button onClick={() => setIsShowing(false)}>Hide</button>
      <button onClick={() => setIsShowing(true)}>show</button>
      <button onClick={() => setIsShowing(!isShowing)}> hide/Show</button>
      <br />
      <br />
      {isShowing ? (
        <img
          src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width="200"
        />
      ) : null}
      <hr />
      <h2>Working with number</h2>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <hr />
      <h2>Working with String</h2>
      <h1>My name is {userName}</h1>
      <button onClick={() => setUserName("Alpesh")}>Change</button>
    </div>
  );
}

export default App;
