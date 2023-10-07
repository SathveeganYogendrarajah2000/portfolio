import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
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
