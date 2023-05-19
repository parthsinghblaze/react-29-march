import { useState } from "react";

function getLocalStorageData() {
  const data = localStorage.getItem("data");

  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tableData, setTableData] = useState(getLocalStorageData());
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formValue = {
      id: new Date().getTime(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    setTableData([...tableData, formValue]);
    localStorage.setItem("data", JSON.stringify([...tableData, formValue]));
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  function handleDelete(id) {
    const updatedData = tableData.filter((item) => item.id !== id);
    localStorage.setItem("data", JSON.stringify(updatedData));
    setTableData(updatedData);
  }

  function addToEditStage(item) {
    const { firstName, lastName, email, id } = item;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setIsEdit(true);
    setEditId(id);
  }

  function handleEdit(e) {
    e.preventDefault();
    const editTableData = tableData.map((item) => {
      if (item.id === editId) {
        return { ...item, firstName, lastName, email };
      } else {
        return item;
      }
    });

    setTableData(editTableData);
    localStorage.setItem("data", JSON.stringify(editTableData));
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsEdit(false);
    setEditId(null);
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
            {isEdit ? (
              <button
                className="btn btn-warning mt-3 w-100"
                onClick={handleEdit}
              >
                Update
              </button>
            ) : (
              <button
                className="btn btn-light mt-3 w-100"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </form>
        </div>
        <div
          className="col-md-8 offset-md-2 mt-5"
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
                      <button
                        className="btn btn-warning ms-3"
                        onClick={() => addToEditStage(item)}
                      >
                        Edit
                      </button>
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
