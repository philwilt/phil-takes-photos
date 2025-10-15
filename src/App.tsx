import { Routes, Route } from "react-router-dom";
import Galleries from "./components/Galleries";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galleries" element={<Galleries />} />

        {/*<Route path="/about" element={<About />} />*/}
      </Routes>
      idijfdoijf
    </>
  );
}

export default App;
