import React from "react";
import Nav from "./navbar.module.css";
import Logo from "./LOGO1.png";
import Logo2 from "./LOGO2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [fg, setfg] = useState(0);
    return (
        <div className={Nav.NavBar}>
            <div className={Nav.Title}>
                {" "}
                <img src={Logo2} alt="Logo1" className={Nav.Logo2} />
                <img src={Logo} alt="Logo2" className={Nav.Logo1} />{" "}
            </div>
            <ul className={fg === 0 ? Nav.NavLinks : Nav.NavLinks2}>
                <li>
                    {" "}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/facilities">Facilities</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/gallery">Gallery</Link>
                </li>
                {/* <li>
                    {" "}
                    <Link to="/">Hostel map</Link>
                </li> */}
                <li>
                    {" "}
                    <Link to="/contact">Contact</Link>
                </li>
                {/* <li>
                    {" "}
                    <Link to="/merchandise">Merchandise</Link>
                </li> */}
                <li className={Nav.Login2}>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div className={Nav.Login}>
                <Link to="/login">Login</Link>
            </div>

            <div
                className={Nav.burger}
                onClick={() => {
                    if (fg === 0) {
                        setfg(1);
                    } else {
                        setfg(0);
                    }
                }}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
