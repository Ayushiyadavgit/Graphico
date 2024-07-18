import React, { useState } from "react";
import "../App.css";
import { Search, Menu, Close } from "@mui/icons-material";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <nav className="navbar-xl">
                {/* ------------------------Menu part */}
                <ul id="menu">
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                    <li className="dropdown">
                        <a href="#">Category</a>
                        <ul>
                            <li>
                                <a href="/Picture">Picture</a>
                            </li>
                            <li>
                                <a href="/Art">Art</a>
                            </li>
                            <li>
                                <a href="/Graphics">Graphics</a>
                            </li>
                            <li>
                                <a href="/Sculpture">Sclupture</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* ---------------------------------Logo part */}

                <span className="logo">Graphico</span>

                {/* ------------------------------------Login part */}

                <span className="searchIcon">
                    <Search></Search>
                </span>
                <input className="Search" placeholder="Search"></input>
                <button className="btn">
                    <a href="/Login">Log in</a>
                </button>

                {/* ------------------------------ mobile-view---------------------------------------------------------------------------- */}
            </nav>
            <nav className="navbar-s container">
                <div className="column left">
                    <span
                        className="icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {!menuOpen ? <Menu></Menu> : <Close></Close>}
                    </span>
                </div>
                {/* ---------------------Icon----------------------- */}
                <div className="column center">
                    <span className="logo">Graphico</span>
                </div>

                {/* -----------------------Login button and search bar*/}
                <div className="column right">
                    {/* <span className='searchIcon'>
            <Search></Search>
          </span>
          <input className="Search" placeholder="Search"></input> */}
                    <button className="btn">
                        <a href="/Login">Log in</a>
                    </button>
                </div>
            </nav>
            {/* ------------------------Menu Bar------------ */}

            <div
                className={
                    "menu-bar " + (menuOpen ? "showMenubar" : "hideMenubar")
                }
            >
                <ul>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                    <li className="subcategory">
                        <span className="category">Category</span>
                        <ul>
                            <li>
                                <a href="/Art">Art</a>
                                <br></br>
                                <span className="option">Hand made sketch</span>
                            </li>
                            <li>
                                <a href="/Picture">Picture</a>
                                <br></br>
                                <span className="option">
                                    photography collection
                                </span>
                            </li>
                            <li>
                                <a href="/Graphics">Graphics</a>
                                <br></br>
                                <span className="option">Vector Arts</span>
                            </li>
                            <li>
                                <a href="/Sculpture">Sclupture</a>
                                <br></br>
                                <span className="option">
                                    Hand made Sculpture
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
