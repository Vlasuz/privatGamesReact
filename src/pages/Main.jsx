import React from 'react';
import MainGames from "../components/components_main/MainGames";
import MainIntro from "../components/components_main/MainIntro";
import MainRooms from "../components/components_main/MainRooms";
import MainAdvantages from "../components/components_main/MainAdvantages";
import MainVideo from "../components/components_main/MainVideo";
import MainLastNews from "../components/components_main/MainLastNews";
import MainFeedback from "../components/components_main/MainFeedback";

const Main = (props) => {

    return (
        <main className="main">
            <MainIntro />
            <MainGames states={props.states[1]} />
            <MainRooms states={props.states[2]} />
            <MainAdvantages />
            <MainVideo />
            <MainLastNews states={props.states[0]} />
            <MainFeedback />
        </main>
    );
};

export default Main;