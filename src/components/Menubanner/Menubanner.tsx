import React from "react";

function Menubanner() {
    return (
        <section className="menu-banner-section">
            <div className="info-box">
                <span>
                    Our <br />
                    Exclusive
                    <br />
                    Menu
                </span>
            </div>
            <img className="infoimage" src="assets/images/round-dot-shape.png" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-4">
                        <div className="main-comtent">
                            <div className="left-area">
                                <h3 className="title wow fadeInUp">
                                    Experience Our Delicious Menu!
                                </h3>
                            </div>
                            <div className="right-area">
                                <a href="#" className="custom-button wow fadeInUp">
                                    View More{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menubanner;
