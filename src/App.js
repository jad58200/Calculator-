import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Converter from "./components/Converter";
import Reference from "./components/Reference";
import Extras from "./components/Extras";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="main-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/extras" element={<Extras />} />
          {}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
