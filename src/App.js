import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/cartSlice"
import { changeName } from "./redux/profileSlice"
import List from "./List"


function App() {
    // toolkit => store 
    // if you want to connect that store then you have to use react-redux 
    const { totalItem } = useSelector((state) => state.cart)
    const { name, image} = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    const [formValue, setFormValue] = useState(0)
    const [userName, setUserName] = useState("")
    

    return <List />

    return (
        <div className="container">
            <h1>Hello Redux</h1>
            <h3>{formValue}</h3>
            <h2>Total Item {totalItem} </h2>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}  />
            <br />
            <br />
            <button className="btn btn-sm btn-primary" onClick={() => dispatch(increment(formValue))}>+</button>
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(decrement(formValue))}>-</button>
            <hr />
            <h1>Profile</h1>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <h1>User Name: {name} </h1>
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(changeName(userName))}>Change Name</button>
        </div>
    )
}

export default App 