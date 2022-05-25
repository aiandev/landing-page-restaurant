import React from "react";

function Testimonial() {
    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-1 col-lg-7 order-last order-lg-first">
                        <div className="slider-wrapper">
                            <img
                                className="big"
                                src="assets/images/testimonial/big-circle.png"
                                alt=""
                            />
                            <img
                                className="small"
                                src="assets/images/testimonial/small-circle.png"
                                alt=""
                            />
                            <div className="testimonial-slider owl-carousel">
                                <div className="slider-item">
                                    <div className="single-review">
                                        <img src="assets/images/testimonial/ic1.png" alt="" />
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p className="review">
                                            The fantastic dishes, the restaurant itself, the
                                            friendly and attentive staff and of course the marvelous
                                            Chef de Maestro food made our stay in Nice.
                                        </p>
                                        <h4 className="name">Donnie Neal</h4>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="single-review">
                                        <img src="assets/images/testimonial/ic1.png" alt="" />
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p className="review">
                                            The fantastic dishes, the restaurant itself, the
                                            friendly and attentive staff and of course the marvelous
                                            Chef de Maestro food made our stay in Nice.
                                        </p>
                                        <h4 className="name">Donnie Neal</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-lg-5 align-self-center">
                        <div className="section-header">
                            <h6 className="sub-title wow fadeInUp">Testimonials</h6>
                            <h2 className="title wow fadeInUp">What Our Clients Say</h2>
                            <a href="#" className="custom-button wow fadeInUp">
                                Leave a review
                                <img src="assets/images/testimonial/arrow-icon.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
