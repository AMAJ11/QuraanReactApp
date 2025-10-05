import { BrowserRouter, Routes, Route   } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from "./Home";
import About from "./About";
import Quraan from "./quraan";
import Navbar from "./components/navbar";


function App() {
  return (
    <div  className="dark min-h-screen bg-gray-900 text-white">
    <BrowserRouter>
      <Navbar />
        <div className="p-6 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/quraan" element={<Quraan />} />
          </Routes>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
