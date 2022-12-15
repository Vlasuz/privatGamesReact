import React, {useEffect} from 'react';
import './styles/styles.css';
import JsAos from "./components/JS_Aos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsScroll from "./components/JS_Scroll";
import testWebP from "./components/JS_WebP";
import Routers from "./pages/Routers";
import {BrowserRouter} from "react-router-dom";
import Popups from "./components/components_popups/Popups";
import {useTranslation} from "react-i18next";

const App = (props) => {

    useEffect(() => {
        JsAos()
        JsScroll()
        testWebP(document.body)
    })
    const {t} = useTranslation();

    return (
        <BrowserRouter>
            <div className="wrapper-bg _webp-true" data-aos="fade-in" data-aos-delay="200" style={{backgroundImage: "url(images/body-bg.webp)"}}/>
            <div className="wrapper-bg _webp-false" data-aos="fade-in" data-aos-delay="200" style={{backgroundImage: "url(images/body-bg.jpg)"}}/>

            <Header />

            <Routers />

            <Footer/>

            <Popups/>

        </BrowserRouter>
    );
};

export default App;