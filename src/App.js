import { useState } from 'react';

function App() {

    // useState is a function which will return an array ;
    // 1 -> initialValue
    // 2 -> function this function will change the initialValue

    const [userName, setUserName] = useState("Kalpesh"); 
    const [number, setNumber] = useState(0);
    const [isShowing, setIsShowing] = useState(true);

    return (
        <div className='container'>
            <h2>Boolean</h2>
            <button onClick={() => setIsShowing(false)}>Hide</button>
            <button>Show</button>
            <button>Hide/show</button>
            <br />
            <br />
            {
                isShowing ? <img src='https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width="200" /> :  null
            }
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
    )
}

export default App 