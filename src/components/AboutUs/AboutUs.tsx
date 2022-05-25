import React from "react";

function AboutUs() {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title extra-padding wow fadeInUp">ABOUT US</h6>
                                <h2 className="title extra-padding wow fadeInUp">
                                    Dedicated To Delight You
                                </h2>
                                <p>
                                    {`Maestro food blends contemporary elegance and comfort with
                                    innovative cuisine and excellent service. The original menu and
                                    unique decor make Maestro food an ideal setting for business
                                    meetings, romantic evenings, or a night out with friends.
									`}
                                </p>
                                <p>
                                    {` A meal at Maestro food is one you won't soon forget and value
                                    you won’t believe.	`}
                                </p>
                            </div>
                            <img src="assets/images/sign.png" alt="" />
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
