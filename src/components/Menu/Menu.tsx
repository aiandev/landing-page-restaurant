import React from "react";
import {useTranslation} from "react-i18next";
import {categories} from "../../data";
import {namespaces} from "../../i18n/i18n.constants";
import Category from "./Category/Category";
import CategoryHeader from "./Category/CategoryHeader";

function Menu() {
    const {t} = useTranslation(namespaces.pages.menu);
    return (
        <section className="menu-section2" id="menu">
            <img className="shape1" src="assets/images/menu/menuleft2.png" alt="" />
            <img className="shape2" src="assets/images/menu/menuright2.png" alt="" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title wow fadeInUp">{t("title")}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="menu-tab-area">
                            <CategoryHeader></CategoryHeader>
                            <div className="tab-content">
                                {categories.map((category, index) => {
                                    return <Category key={index} category={category}></Category>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
