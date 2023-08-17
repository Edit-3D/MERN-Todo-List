import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./layouts/LoginPage";
import MainPage from "./layouts/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Main" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
