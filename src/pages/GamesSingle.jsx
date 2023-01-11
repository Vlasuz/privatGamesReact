import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {addRoomAction} from "../redux/actions";
import GamesSingleRooms from "../components/components_games_single/GamesSingleRooms";
import JsCustomSelect from "../components/JS_CustomSelect";

const GamesSingle = (props) => {
    const {gamesId} = useParams()

    const games = useSelector(state => {
        const {GamesListReducer} = state;
        return GamesListReducer.games;
    })

    const thisGame = games.filter(item => item.id === gamesId)[0];

    const [isShowMoreText, setIsShowMoreText] = useState(false)


    const handleMoreText = (e) => {
        e.preventDefault()
        setIsShowMoreText(prev => !prev)
    }

    return (
        <main className="main">
            <section className="page-game page-padding">
                <div className="page-game__container container">
                    <div className="page-game__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <NavLink to={'/games'} className="page-game__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </NavLink>
                        <h2 className="page-game__section-title section-title page-header__title _decor-none">
                            {thisGame.title}
                        </h2>
                        <div className="page-game__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <a href="index.html" className="page-header__bread-crumbs--link">
                                        Главная
                                    </a>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <NavLink to={"/games"} className="page-header__bread-crumbs--link">
                                        Все онлайн игры
                                    </NavLink>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        {thisGame.title}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-game__main" data-aos="fade-in" data-aos-delay="400">
                        <div className="page-game__block">
                            <div className="page-game__image">
                                <div className="page-game__image--body">
                                    <picture>
                                        <img src={"../"+thisGame.image} alt="" loading="lazy" width="194"
                                             height="194" className="page-game__image--img"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="page-game__info">
                                <div className="page-game__descr">
                                    <h3 className="page-game__descr--title">
                                        Как играть?
                                    </h3>
                                    <div className={"page-game__descr--text" + (isShowMoreText ? " _visible" : "")}>
                                        {thisGame.data.text}
                                    </div>
                                    {
                                        thisGame.data.text.length > 450 ?
                                            <button
                                                className={"page-game__descr--text-more-btn" + (isShowMoreText ? " _active" : "")} type="button"
                                                onClick={handleMoreText}
                                            >
                                                {isShowMoreText ? "скрыть" : "больше..."}
                                            </button> : ''
                                    }

                                </div>
                                <ul className="page-game__base-info">
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Максимум игроков
                                        </h4>
                                        <div className="page-game__param--row">
                                            <div className="page-game__param--element">
                                                <span>
                                                    {thisGame.data.max_gamers}
                                                </span>
                                                <img src="../images/icons/person.svg" width="13" height="13" alt=""/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Валюты игры
                                        </h4>
                                        <div className="page-game__param--row">
                                            {
                                                thisGame.data.currency.money ?
                                                    <div className="page-game__param--element">
                                                        <img src="../images/icons/dollar-circle.svg" width="15" height="15" alt=""/>
                                                    </div> : ""
                                            }
                                            {
                                                thisGame.data.currency.chips ?
                                                    <div className="page-game__param--element">
                                                        <img src="../images/icons/chip.svg" width="15" height="15" alt=""/>
                                                    </div> : ""
                                            }
                                        </div>
                                    </li>
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Тип комнат
                                        </h4>
                                        <div className="page-game__param--row">
                                            {
                                                thisGame.data.type_rooms.open_rooms ?
                                                    <div className="page-game__param--element">
                                                        <span>Открытая игра</span>
                                                        <img src="../images/icons/door-open.svg" width="17" height="17" alt=""/>
                                                    </div> : ""
                                            }
                                            {
                                                thisGame.data.type_rooms.close_rooms ?
                                                    <div className="page-game__param--element">
                                                        <span>Закрытая игра</span>
                                                        <img src="../images/icons/door-lock.svg" width="17" height="17" alt=""/>
                                                    </div> : ""
                                            }

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <GamesSingleRooms gamesId={gamesId} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GamesSingle;