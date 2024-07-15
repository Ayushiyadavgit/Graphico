import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Art from "./components/Pages/Art";
import Graphics from "./components/Pages/Graphics";
import Picture from "./components/Pages/Picture";
import Sculpture from "./components/Pages/Sculpture";
import Login from "./components/Pages/Login";
import Signin from "./components/Pages/Signin";
import Photo from "./components/Photo";
import SingleCard from "./components/SingleCard";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <Layout>
                            <Routes>
                                <Route
                                    path="/About"
                                    element={<About />}
                                ></Route>
                                <Route
                                    path="/Contact"
                                    element={<Contact />}
                                ></Route>
                                <Route path="/Art" element={<Art />}></Route>
                                <Route
                                    path="/Graphics"
                                    element={<Graphics />}
                                ></Route>
                                <Route
                                    path="/Picture"
                                    element={<Picture />}
                                ></Route>
                                <Route
                                    path="/Sculpture"
                                    element={<Sculpture />}
                                ></Route>
                                <Route
                                    path="/Login"
                                    element={<Login />}
                                ></Route>
                                <Route
                                    path="/Signin"
                                    element={<Signin />}
                                ></Route>
                                <Route
                                    path="/Photo"
                                    element={<Photo />}
                                ></Route>
                                <Route
                                    path="/SingleCard"
                                    element={<SingleCard />}
                                ></Route>
                            </Routes>
                        </Layout>
                    }
                />

                {/* Componets out of layout will be here */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
