import React from "react";

function Amenities() {
    return (
        <section className="amenities-section" id="visitus">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title wow fadeInUp">AMENITIES</h6>
                                <h2 className="title wow fadeInUp">Make Plans To Visit Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-amenities">
                            <div className="icon">
                                <img src="assets/images/amenities/ic1.png" alt="" />
                            </div>
                            <p className="text">Parking Available</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-amenities">
                            <div className="icon">
                                <img src="assets/images/amenities/ic2.png" alt="" />
                            </div>
                            <p className="text">Kids Play Area</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-amenities">
                            <div className="icon">
                                <img src="assets/images/amenities/ic3.png" alt="" />
                            </div>
                            <p className="text">Menu à la Carte</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Amenities;
