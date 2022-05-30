import React from "react";
import Header from "components/Header/Header";
import Banner from "components/Banner/Banner";
import AboutUs from "components/AboutUs/AboutUs";
import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Menu />
            <Footer />
        </>
    );
};

export default App;
