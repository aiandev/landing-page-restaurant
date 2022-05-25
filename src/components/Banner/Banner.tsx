import React from "react";

function Banner() {
    return (
        <section className="banner-section2">
            <img
                className="img1 wow fadeInLeft"
                data-wow-delay=".7s"
                src="assets/images/banner/aimg6.png"
                alt=""
            />
            <img
                className="img2 wow fadeInRight"
                data-wow-delay=".7s"
                src="assets/images/banner/aimg4.png"
                alt=""
            />
            <img className="img3" src="assets/images/banner/aimg5.png" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="main-content">
                            <h1 className="main-sub-title wow fadeInLeft" data-wow-delay=".2s">
                                Welcome to Maestro food
                            </h1>
                            <h1 className="main-title wow fadeInRight" data-wow-delay=".2s">
                                Food is Art
                            </h1>
                            <p className="text">
                                {`Our dishes are not a list of ingredients, they're a blend of
                                techniques, cultures and passion`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner;
