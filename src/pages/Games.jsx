import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MainGamesCatalog from "../components/components_main/MainGamesCatalog";
import MainGamesList from "../components/components_main/MainGamesList";
import GamesTop from "../components/components_games/GamesTop";
import GamesBackground from "../components/components_games/GamesBackground";

const Games = (props) => {

    return (
        <main className="main">
            <section className="online-games section-page-bg-wrapper page-padding">

                <GamesBackground />

                <div className="online-games__container container">
                    <GamesTop/>

                    <div className="online-games__main _pt tab-wrapper" data-aos="fade-in" data-aos-delay="400">
                        <MainGamesCatalog />
                        <MainGamesList />
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Games;