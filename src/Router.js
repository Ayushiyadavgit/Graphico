import React from 'react';
import Layout from "./components/Layout";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Art from "./components/Pages/Art";
import Graphics from "./components/Pages/Graphics";
import Picture from "./components/Pages/Picture";
import Sculpture from "./components/Pages/Sculpture";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Art" element={<Art />}></Route>
        <Route path="/Graphics" element={<Graphics />}></Route>
        <Route path="/Picture" element={<Picture />}></Route>
        <Route path="/Sculpture" element={<Sculpture />}></Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router