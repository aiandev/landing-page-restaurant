import React from "react";
import {configs} from "src/configs";

function Footer() {
    return (
        <footer className="footer-section" id="footer">
            <img className="shape" src="assets/images/footer-shape.png" alt="" />
            <img
                className="f-left wow fadeInLeft"
                data-wow-delay=".5s"
                src="assets/images/f-left.png"
                alt=""
            />
            <img
                className="f-right wow fadeInRight"
                data-wow-delay=".5s"
                src="assets/images/f-right.png"
                alt=""
            />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="top-area">
                            <div className="logo">
                                <img src="./assets/images/logo/logo.png" alt="logo" />
                            </div>
                            <div className="footer-social-links">
                                <span className="label">Follow us :</span>
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
                                    <p>Phone Number:</p>
                                    <p>{configs.phone}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="info-box">
                                    <div className="icon">
                                        <img src="assets/images/ii2.png" alt="" />
                                    </div>
                                    <p>{configs.address}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="info-box">
                                    <div className="icon">
                                        <img src="assets/images/ii3.png" alt="" />
                                    </div>
                                    <p>Drop us a line:</p>
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
                        <div className="copyright-text">
                            Copyright © 2020.All Rights Reserved By Maestro food
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
