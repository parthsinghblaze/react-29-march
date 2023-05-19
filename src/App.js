import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Support from "./pages/Support"
import Nav from "./components/Nav"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"

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
        </Routes>
        </>

    )
}

export default App 