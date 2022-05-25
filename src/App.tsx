import React from "react";
import Header from "components/Header/Header";
import Banner from "components/Banner/Banner";
import AboutUs from "components/AboutUs/AboutUs";
import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";
// import {useTranslation} from "react-i18next";
// import {namespaces} from "./i18n/i18n.constants";

const App: React.FC = () => {
    // const {t, i18n} = useTranslation(namespaces.pages.hello);

    // const changeLanguage = (language: string) => () => {
    //     i18n.changeLanguage(language);
    // };
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
