import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuNavbar from "./components/navbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
