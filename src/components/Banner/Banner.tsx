import React from "react";
import {useTranslation} from "react-i18next";
import {configs} from "src/configs";
import {namespaces} from "../../i18n/i18n.constants";

function Banner() {
    const {t} = useTranslation(namespaces.pages.banner);

    return (
        <section className="banner-section2">
            <img
                className="img1 wow fadeInLeft"
                data-wow-delay=".7s"
                src={"assets/images/banner/aimg6.png?version=" + configs.version}
                alt="banner1"
            />
            <img
                className="img2 fadeInRight"
                data-wow-delay=".1s"
                width={"900px"}
                src={"assets/images/banner/aimg4.png?version=" + configs.version}
                alt="banner2"
            />
            <img
                className="img3"
                src={"assets/images/banner/aimg5.png?version=" + configs.version}
                alt="banner3"
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="main-content">
                            <h1 className="main-title wow fadeInLeft" data-wow-delay=".2s">
                                {t("welcome")}
                            </h1>
                            <h3 className="main-sub-title wow fadeInRight" data-wow-delay=".2s">
                                {t("slogan")}
                            </h3>
                            <p className="text">{t("quote")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner;
