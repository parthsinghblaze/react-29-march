import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Support from "./pages/Support"
import Nav from "./components/Nav"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Cocktail from "./pages/Cocktail"
import CocktailDetail from "./pages/CocktailDetail"

function App() {
    return (
        <>
        <Nav />
        <Routes>
            <Route path="/support" element={<Support />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/cocktails" element={<Cocktail />} />
            <Route path="/cocktail/:id" element={<CocktailDetail />} />
        </Routes>
        </>

    )
}

export default App 