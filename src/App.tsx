import { BrowserRouter, Routes, Route } from "react-router-dom";

import Board from "./pages/Board";
import Backlog from "./pages/BackLog";
import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/backlog" element={<Backlog />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
