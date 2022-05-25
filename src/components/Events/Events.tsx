import React from "react";

function Events() {
    return (
        <section className="event-section" id="event">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-3 d-flex flex-column justify-content-between">
                        <div className="section-header">
                            <h6 className="sub-title wow fadeInUp">PLAN YOUR NEXT</h6>
                            <h2 className="title wow fadeInUp">EVENT</h2>
                            <p className="text">
                                Transform your Event from Ordinary to Extraordinary
                            </p>
                        </div>
                        <div className="section-footer">
                            <ul className="nav" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link active"
                                        id="pills-tabone-tab"
                                        data-toggle="pill"
                                        href="#pills-tabone"
                                        role="tab"
                                        aria-controls="pills-tabone"
                                        aria-selected="true"
                                    >
                                        <div className="icon">
                                            <img src="assets/images/event/ic1.png" alt="" />
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="pills-tabtwo-tab"
                                        data-toggle="pill"
                                        href="#pills-tabtwo"
                                        role="tab"
                                        aria-controls="pills-tabtwo"
                                        aria-selected="false"
                                    >
                                        <div className="icon">
                                            <img src="assets/images/event/ic2.png" alt="" />
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="pills-tabthree-tab"
                                        data-toggle="pill"
                                        href="#pills-tabthree"
                                        role="tab"
                                        aria-controls="pills-tabthree"
                                        aria-selected="false"
                                    >
                                        <div className="icon">
                                            <img src="assets/images/event/ic3.png" alt="" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="main-content">
                            <a href="#" className="book-btn">
                                Book Now <img src="assets/images/event/icon.png" alt="" />
                            </a>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-tabone"
                                    role="tabpanel"
                                    aria-labelledby="pills-tabone-tab"
                                >
                                    <div className="event-img">
                                        <img src="assets/images/event/event1.png" alt="" />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-tabtwo"
                                    role="tabpanel"
                                    aria-labelledby="pills-tabtwo-tab"
                                >
                                    <div className="event-img">
                                        <img src="assets/images/event/event1.png" alt="" />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-tabthree"
                                    role="tabpanel"
                                    aria-labelledby="pills-tabthree-tab"
                                >
                                    <div className="event-img">
                                        <img src="assets/images/event/event1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;
