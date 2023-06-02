import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/cartSlice"
import { changeName } from "./redux/profileSlice"

function App() {
    // toolkit => store 
    // if you want to connect that store then you have to use react-redux 
    const { totalItem } = useSelector((state) => state.cart)
    const { name, image} = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    return (
        <div className="container">
            <h1>Hello Redux</h1>
            <h2>Total Item {totalItem} </h2>
            <button className="btn btn-sm btn-primary" onClick={() => dispatch(increment())}>+</button>
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(decrement())}>-</button>
            <hr />
            <h1>Profile</h1>
            <h1>User Name: {name} </h1>
            <img src={image} width="100px" />
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(changeName())}>Change Name</button>
        </div>
    )
}

export default App 