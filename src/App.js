import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Support from "./pages/Support"
import Nav from "./components/Nav"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Cocktail from "./pages/Cocktail"
import CocktailDetail from "./pages/CocktailDetail"
import { createContext, useState } from "react"
import PrivateRoute from "./components/PrivateRoute"
import { courseList } from "./courseList"

export const AppDetails = createContext()

function getLocalStorage() {
    const isLogin = localStorage.getItem('login')
    if(isLogin) {
        return true 
    } else {
        return false
    }
}

function App() {

    const [login , setLogin] = useState(getLocalStorage())
    const [cart, setCart] = useState([]);
    const [courseListData, setCourseLisData] = useState(courseList)

    return (
        <>
        <AppDetails.Provider value={{login, cart, setCart, setLogin, courseListData, setCourseLisData}}>
        <Nav />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={  <About />} />
            <Route path="/courses" element={ <PrivateRoute><Courses /></PrivateRoute> } />
            <Route path="/course/:id" element={  <PrivateRoute> <CourseDetail /> </PrivateRoute>} />
            <Route path="/support" element={<Support />} />
            <Route path="/cocktails" element={<PrivateRoute><Cocktail /></PrivateRoute>} />
            <Route path="/cocktail/:id" element={ <PrivateRoute><CocktailDetail /></PrivateRoute> } />
        </Routes>
        </AppDetails.Provider>
        </>

    )
}

export default App 