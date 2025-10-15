import { Routes, Route } from "react-router-dom";
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
        {/*<Route path="/about" element={<About />} />*/}
      </Routes>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-3">
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
      </footer>
    </>
  );
}

export default App;
