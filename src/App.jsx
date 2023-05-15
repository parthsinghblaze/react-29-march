import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tableData, setTableData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formValue = {
      id: new Date().getTime(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    setTableData([...tableData, formValue]);
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  function handleDelete(id) {
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-3 mt-5 offset-md-4 shadow bg-info">
          <h5>Sign Up</h5>
          {/* {firstName ? <h6>Welcome, {firstName}</h6> : null} */}
          {firstName && <h6 className="text-center">Welcome, {firstName}</h6>}
          <form action="">
            <div className="mb-3">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                className="form-control"
              />
            </div>
            <button className="btn btn-light mt-3 w-100" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div
          className="col-md-6 offset-md-3 mt-5"
          style={{ marginBottom: "100px" }}
        >
          <table className="table table-primary">
            <thead>
              <tr>
                <th>Sr no</th>
                <th>First name</th>
                <th>Last name</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                const { id, firstName, lastName, email } = item;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{firstName}</td>
                    <td> {lastName} </td>
                    <td> {email} </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                      <button className="btn btn-warning">Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
