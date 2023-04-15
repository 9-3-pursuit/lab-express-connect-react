// DEPENDENCIES

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";

// PAGES
import Home from "./Pages/Home";
import NewLog from "./Pages/NewLog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewLog" element={<NewLog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
