import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Galleries from "./components/gallery/Galleries";
import Gallery from "./components/gallery/Gallery";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="flex flex-col items-center justify-center mt-3 gap-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/plentiphil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src="/instagram.svg"
            alt="instagram icon"
            width={36}
            height={36}
          />
          Instragram
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://github.com/philwilt/phil-takes-photos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Phil Wilt
        </a>
      </footer>
    </>
  );
}

export default App;
