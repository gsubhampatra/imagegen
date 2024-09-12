import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Generator from "./components/Generator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generator/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
