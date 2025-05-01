import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Services";
import Fun from "./Pages/Fun";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Work from "./Pages/Work";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Work" element={<Work />} />
          <Route path="Service" element={<Service />} />
          <Route path="Fun" element={<Fun />} />
          <Route path="About" element={<About />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
