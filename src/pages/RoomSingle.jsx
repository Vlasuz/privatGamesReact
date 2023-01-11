import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {use} from "i18next";
import openPopup from "../hooks/OpenPopup";
import PopupCross from "../components/components_popups/PopupCross";
import PopupBgd from "../components/components_popups/PopupBgd";
import StartGame from "../components/component_game/game_thousand/StartGame";
import GameDealing from "../components/component_game/game_thousand/GameDealing";
import GameRunning from "../components/component_game/game_thousand/GameRunning";
import GameGives from "../components/component_game/game_thousand/GameGives";

const RoomSingle = (props) => {

    const [stepOfGame, setStepOfGame] = useState(1)

    const [myCards, setMyCards] = useState(
        [
            {id: 0, card_type: 9, card_suit: 1},
            {id: 1, card_type: 10, card_suit: 2},
            {id: 2, card_type: 11, card_suit: 3},
            {id: 3, card_type: 13, card_suit: 2},
            {id: 4, card_type: 14, card_suit: 2},
        ]
    );
    const [dealingCards, setDealingCards] = useState(
        [
            {id: 1, card_type: 10, card_suit: 1},
            {id: 2, card_type: 11, card_suit: 1},
            {id: 3, card_type: 12, card_suit: 3},
        ]
    )


    return (
        <>
            {
                stepOfGame === 1 ? <StartGame setStepOfGame={setStepOfGame} /> :
                    stepOfGame === 2 ? <GameDealing setStepOfGame={setStepOfGame} /> :
                        stepOfGame === 3 ?<GameGives setStepOfGame={setStepOfGame} /> :
                            <GameRunning setStepOfGame={setStepOfGame} />
            }
        </>
    );
};

export default RoomSingle;