import React, {useEffect, useState} from "react";
import {i18n} from "src/i18n/i18n";

const localLanguage = localStorage.getItem("lng");

function Header() {
    const [language, setlanguage] = useState(localLanguage ? localLanguage : "es");

    const changeLanguage = (lang) => {
        setlanguage(lang);
    };

    useEffect(() => {
        localStorage.setItem("lng", language);
        i18n.changeLanguage(language);
    }, [language]);

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
                        <li>
                            <a href="#">{language}</a>
                            <ul className="submenu">
                                <li>
                                    <a onClick={() => changeLanguage("en")}>English</a>
                                </li>
                                <li>
                                    <a onClick={() => changeLanguage("es")}>Spanish</a>
                                </li>
                            </ul>
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
