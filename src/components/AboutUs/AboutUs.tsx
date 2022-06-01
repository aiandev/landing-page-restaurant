import React from "react";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";

function AboutUs() {
    const {t} = useTranslation(namespaces.pages.about);
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title extra-padding wow fadeInUp">
                                    {t("intro")}
                                </h6>
                                <h2 className="title extra-padding wow fadeInUp">{t("title")}</h2>
                                <p>{t("description_1")}</p>
                                <p>{t("description_2")}</p>
                            </div>
                            <img width={"600px"} src="assets/images/sign.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="img">
                            <img
                                className="bg-shape"
                                src="assets/images/about/vegetales-shapes.png"
                                alt=""
                            />
                            <img src="assets/images/about/Image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
