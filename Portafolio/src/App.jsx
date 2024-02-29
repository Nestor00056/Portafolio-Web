import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./views/Home/HomeComponent/Home";
import Aboutme from "./views/Aboutme/Aboutme";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home></Home>} />
        <Route path="aboutme" element={<Aboutme></Aboutme>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
