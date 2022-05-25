import React from "react";

function Header() {
    return (
        <header className="header-section">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <a href="index.html">
                            <img src="./assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#footer">Contact Us</a>
                        </li>
                    </ul>
                    <div className="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
