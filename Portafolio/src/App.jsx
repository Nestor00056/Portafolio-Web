import { useState } from "react";

import { Route, Routes } from "react-router";
import Home from "./views/Home/HomeComponent/Home";
import Aboutme from "./views/Aboutme/Aboutme";
import Proyect from "./views/Proyects/Proyect";
import ProyectDetailed from "./views/Proyects/ProyectsDetailed";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home></Home>} />
        <Route path="aboutme" element={<Aboutme></Aboutme>}></Route>
        <Route path="proyects" element={<Proyect></Proyect>}></Route>
        <Route path="proyects/:id" element={<ProyectDetailed></ProyectDetailed>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
