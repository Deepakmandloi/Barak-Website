import React from "react";
import footCss from "./footer.module.css";
import instagram from "./Instagram.png";
import facebook from "./facebook.png";
import barakLogo from "./barakLogo.png";
import Barak2 from "./Barak2.png";
import iitgLogo from "./iitgLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={footCss.content}>
            <div className={footCss.mainwrapper}>
                <img src={barakLogo} alt="Logo" className={footCss.barakLogo} />
                <div className={footCss.icons}>
                    <img src={Barak2} alt="BARAK" className={footCss.Barak2} />

                    <div className={footCss.socialmedia}>
                        <Link to="\">
                            <img alt="Facebook" src={facebook} />
                        </Link>
                        <Link to="\">
                            <img alt="Instagram" src={instagram} />
                        </Link>
                    </div>
                </div>
                <div className={footCss.wrapper}>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                </div>
                <img src={iitgLogo} alt="IITG" className={footCss.iitgLogo} />
            </div>
            <div className={footCss.bottom}>
                <ul>
                    <li>
                        <Link to="/"> Terms of Use </Link>
                    </li>
                    <li className={footCss.dash}>|</li>
                    <li>
                        <Link to="/">Cookies </Link>
                    </li>
                    <li className={footCss.dash}>|</li>
                    <li>
                        <Link to="/">Privacy </Link>
                    </li>
                    <li className={footCss.dash}>|</li>
                    <li>
                        {" "}
                        <Link to="/">About Us</Link>
                    </li>
                    <li className={footCss.dash}>|</li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
