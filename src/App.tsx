import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";
import Navbar from "./components/Navbar";

import "./css/style.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
