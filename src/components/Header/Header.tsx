import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {i18n} from "src/i18n/i18n";
import {namespaces} from "src/i18n/i18n.constants";
import Flag from "react-world-flags";

const localLanguage = localStorage.getItem("lng");

function Header() {
    const [language, setlanguage] = useState(localLanguage ? localLanguage : "ro");
    const [headerScroll, setHeaderScroll] = useState(false);
    const {t} = useTranslation(namespaces.header);

    const changeLanguage = (lang) => {
        setlanguage(lang);
    };

    useEffect(() => {
        localStorage.setItem("lng", language);
        i18n.changeLanguage(language);
    }, [language]);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setHeaderScroll(true);
        } else {
            setHeaderScroll(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <header className={headerScroll ? "header-section header-active" : "header-section"}>
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <a href="index.html">
                            <img src="./assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li className="active">
                            <a href="#">{t("home")}</a>
                        </li>
                        <li>
                            <a href="#about">{t("about")}</a>
                        </li>
                        <li>
                            <a href="#menu">{t("menu")}</a>
                        </li>
                        <li>
                            <a href="#footer">{t("contact_us")}</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                                {language}
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a onClick={() => changeLanguage("ro")}>
                                        <Flag code="ro" height="22" />
                                        <span className="flag_span">Ro</span>
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => changeLanguage("ru")}>
                                        <Flag code="ru" height="22" />
                                        <span className="flag_span">Ru</span>
                                    </a>
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
