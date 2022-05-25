import React from "react";
import {categories} from "src/data";
import Category from "./Category/Category";
import CategoryHeader from "./Category/CategoryHeader";

function Menu() {
    return (
        <section className="menu-section2" id="menu">
            <img className="shape1" src="assets/images/menu/menuleft2.png" alt="" />
            <img className="shape2" src="assets/images/menu/menuright2.png" alt="" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title wow fadeInUp">Explore our menus</h6>
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
