import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {configs} from "src/configs";
import {i18n} from "../../i18n/i18n";
import {namespaces} from "../../i18n/i18n.constants";

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
                            <img
                                src={"./assets/images/logo/logo.png?version=" + configs.version}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <ul className="menu">
                        <li className="active">
                            <a href="/#">{t("home")}</a>
                        </li>
                        <li>
                            <a href="#menu">{t("menu")}</a>
                        </li>
                        <li>
                            <a href="#about">{t("about")}</a>
                        </li>
                        <li>
                            <a href="#footer">{t("contact_us")}</a>
                        </li>
                        <li className="d-none d-lg-block">
                            <a href="/#" onClick={(e) => e.preventDefault()}>
                                {language}
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a onClick={() => changeLanguage("ro")}>
                                        <img
                                            height="22"
                                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3e%3cpath fill='%23002B7F' d='M0 0h1v2H0z'/%3e%3cpath fill='%23FCD116' d='M1 0h1v2H1z'/%3e%3cpath fill='%23CE1126' d='M2 0h1v2H2z'/%3e%3c/svg%3e"
                                        />
                                        <span className="flag_span">Ro</span>
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => changeLanguage("ru")}>
                                        <img
                                            height="22"
                                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 6'%3e%3cpath fill='%23fff' d='M0 0h9v3H0z'/%3e%3cpath fill='%23d52b1e' d='M0 3h9v3H0z'/%3e%3cpath fill='%230039a6' d='M0 2h9v2H0z'/%3e%3c/svg%3e"
                                        />
                                        <span className="flag_span">Ru</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="d-lg-none">
                            <a onClick={() => changeLanguage("ro")}>
                                <img
                                    height="22"
                                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3e%3cpath fill='%23002B7F' d='M0 0h1v2H0z'/%3e%3cpath fill='%23FCD116' d='M1 0h1v2H1z'/%3e%3cpath fill='%23CE1126' d='M2 0h1v2H2z'/%3e%3c/svg%3e"
                                />
                                {"Ro"}
                            </a>

                            <a onClick={() => changeLanguage("ru")}>
                                <img
                                    height="22"
                                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 6'%3e%3cpath fill='%23fff' d='M0 0h9v3H0z'/%3e%3cpath fill='%23d52b1e' d='M0 3h9v3H0z'/%3e%3cpath fill='%230039a6' d='M0 2h9v2H0z'/%3e%3c/svg%3e"
                                />
                                {"Ru"}
                            </a>
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
