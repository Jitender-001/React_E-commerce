import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rout from "./components/rout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Rout></Rout>
      </BrowserRouter>
    </>
  );
}

export default App;
