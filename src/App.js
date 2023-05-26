import { createContext, useState } from "react"
import ComponentA from "./ComponentA"
import Profile from "./Profile"

export const UserDetails = createContext()

// 1 step create a context with the help of createContext 
// 2 step the context that you have create should wrap all the components
// 3 step to get the data/value of the createContext you have to use useContext(createdContext)
function App() {
    const [userName, setUserName] = useState("Nikhil")
    const [totalAmount, setAmount] = useState(100)

    return (
        <UserDetails.Provider value={{ userName, totalAmount }}>
        <div className="container">
            <ComponentA />
            <Profile />
        </div>
        </UserDetails.Provider>

    )
}

export default App 