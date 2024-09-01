import { Route ,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Complaints from "./pages/Complaints";
import Details from "./components/Details";

function App(){
    return <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/complaints"  element={<Complaints />} />
        <Route path="/details/:_id"  element={<Details />} />
    </Routes>
}
export default App  