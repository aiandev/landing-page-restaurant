import React from "react";
import {useTranslation} from "react-i18next";
import {configs} from "../../configs";
import {namespaces} from "../../i18n/i18n.constants";

function Footer() {
    const {t} = useTranslation(namespaces.footer);
    return (
        <footer className="footer-section" id="footer">
            <img className="shape" src="assets/images/footer-shape.png" alt="" />
            <img
                className="f-left wow fadeInLeft"
                data-wow-delay=".5s"
                src="assets/images/f-left.png?version=1"
                alt=""
            />
            <img
                className="f-right wow fadeInRight"
                data-wow-delay=".5s"
                src="assets/images/f-right.png?version=1"
                alt=""
            />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="top-area">
                            <div className="logo">
                                <img src="./assets/images/logo/logo.png?version=1" alt="logo" />
                            </div>
                            <div className="footer-social-links">
                                <span className="label">{t("follow_us")} :</span>
                                <ul>
                                    {configs.footer.social.map((social, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={social.url}>
                                                    <i className={`fab ${social.icon}`}></i>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* <div className="newslater-wrapper">
                            <form className="newslater-form">
                                <input type="text" placeholder="Your Email Address" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div> */}
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="info-box">
                                    <div className="icon">
                                        <img src="assets/images/ii1.png" alt="" />
                                    </div>
                                    <p>{t("phone_number")}:</p>
                                    <a href={`tel:${configs.phone}`}>
                                        <p>{configs.phone}</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="info-box">
                                    <div className="icon">
                                        <img src="assets/images/ii2.png" alt="" />
                                    </div>
                                    <p>{t("Address")}:</p>
                                    <p>{configs.address}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="info-box">
                                    <div className="icon">
                                        <img src="assets/images/ii3.png" alt="" />
                                    </div>
                                    <p>{t("drop_us_line")}:</p>
                                    <a href={`mailto:${configs.email}`}>
                                        <p>{configs.email}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-text">{t("copyright")}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
