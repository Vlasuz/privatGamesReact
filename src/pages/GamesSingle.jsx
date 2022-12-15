import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";

const GamesSingle = (props) => {
    const {catalogId, gamesId} = useParams()

    const thisGame = props.gamesList.filter(item => item.catalog_id === catalogId)[0].list_of_catalog.filter(item => item.id === gamesId)[0];

    const [isShowMoreText, setIsShowMoreText] = useState(false)



    const handleMoreText = (e) => {
        e.preventDefault()
        setIsShowMoreText(prev => !prev)

        // let textMoreBtn = e.target.closest('button')
        //
        // const text = textMoreBtn.parentElement.querySelector('.page-game__descr--text');
        //
        // if(!textMoreBtn.classList.contains('_active')) {
        //
        //     text.classList.add('_visible');
        //     textMoreBtn.classList.add('_active');
        //     textMoreBtn.textContent = textMoreBtn.dataset.visibleText;
        //
        // } else {
        //
        //     text.classList.remove('_visible');
        //     textMoreBtn.classList.remove('_active');
        //     textMoreBtn.textContent = textMoreBtn.dataset.hideText;
        //
        // }

    }

    return (
        <main className="main">
            <section className="page-game page-padding">
                <div className="page-game__container container">
                    <div className="page-game__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <a href="#" className="page-game__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </a>
                        <h2 className="page-game__section-title section-title page-header__title _decor-none">
                            {thisGame.title_of_game}
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
                                        {thisGame.title_of_game}
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
                                        <img src={"../../"+thisGame.image} alt="" loading="lazy" width="194"
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
                                        В игре "Дурак Онлайн" вашей задачей будет быстрее победить соперников и
                                        освободиться от всех карт. Как только до вас будут ходить, отбивайтесь картами
                                        соответствующей масти или ели нет тогда козырем. Ходите на соперников такими
                                        картами, которые соперник не сможет отбить. Вы должны стать лучшим игроком
                                        карточного онлайн дурака, чтобы им не стать! И таким образом повторю этот текст
                                        снова: В игре "Дурак Онлайн" вашей задачей будет быстрее победить соперников и
                                        освободиться от всех карт. Как только до вас будут ходить, отбивайтесь картами
                                        соответствующей масти или ели нет тогда козырем. Ходите на соперников такими
                                        картами, которые соперник не сможет отбить. Вы должны стать лучшим игроком
                                        карточного онлайн дурака!
                                    </div>
                                    <button
                                        className={"page-game__descr--text-more-btn" + (isShowMoreText ? " _active" : "")} type="button"
                                        onClick={handleMoreText}
                                    >
                                        {isShowMoreText ? "скрыть" : "больше..."}
                                    </button>
                                </div>
                                <ul className="page-game__base-info">
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Максимум игроков
                                        </h4>
                                        <div className="page-game__param--row">
                                            <div className="page-game__param--element">
                                                <span>
                                                    8
                                                </span>
                                                <img src="../../images/icons/person.svg" width="13" height="13" alt=""/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Валюты игры
                                        </h4>
                                        <div className="page-game__param--row">
                                            <div className="page-game__param--element">
                                                <img src="../../images/icons/chip.svg" width="15" height="15" alt=""/>
                                            </div>
                                            <div className="page-game__param--element">
                                                <img src="../../images/icons/dollar-circle.svg" width="15" height="15" alt=""/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Тип комнат
                                        </h4>
                                        <div className="page-game__param--row">
                                            <div className="page-game__param--element">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="17" height="17" alt=""/>
                                            </div>
                                            <div className="page-game__param--element">
                                                <span>Закрытая игра</span>
                                                <img src="../../images/icons/door-lock.svg" width="17" height="17" alt=""/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="page-game__rooms">
                            <div className="page-rooms__main--header">
                                <h3 className="page-rooms__main--title">
                                    Выберите комнату
                                </h3>
                                <NavLink to={'/create-room'}
                                   className="page-rooms__main--create-btn btn _large-2 _min-fs hide-on-table">
                                    Добавить комнату
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                                            fill="#F9F1DF"/>
                                    </svg>
                                </NavLink>
                            </div>
                            <ul className="page-rooms__list">
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Дурак классический">
                                                Дурак классический
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Покер">
                                                Покер
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/dollar-circle.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Закрытая игра</span>
                                                <img src="../../images/icons/door-lock.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Проферанс">
                                                Проферанс
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Дурак классический">
                                                Дурак классический
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Покер">
                                                Покер
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/chess.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Шахматы">
                                                Шахматы
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem"><img src="../../images/icons/reload.svg"
                                                                                       width="16" height="16" alt=""/>
                                            </div>
                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Дурак классический">
                                                Дурак классический
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/domino.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Домино">
                                                Домино
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem"><img src="../../images/icons/reload.svg"
                                                                                       width="16" height="16" alt=""/>
                                            </div>
                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Проферанс">
                                                Проферанс
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Дурак классический">
                                                Дурак классический
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/domino.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Домино">
                                                Домино
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Дурак классический">
                                                Дурак классический
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Дурак классический">
                                                Дурак классический
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                                <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="room-item__body">
                                        <div className="room-item__header">
                                            <img src="../../images/icons/cards.svg" width="18" height="18" alt=""
                                                 className="room-item__icon"/>
                                            <h3 className="room-item__name" title="Дурак классический">
                                                Дурак классический
                                            </h3>
                                            <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                12.03.2022 <b>12:43</b>
                                            </time>
                                        </div>
                                        <div className="room-item__info">
                                            <div className="room-item__info-elem">
                                                <span>3/6</span>
                                                <img src="../../images/icons/person.svg" width="10" height="10" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <img src="../../images/icons/chip.svg" width="16" height="16" alt=""/>
                                            </div>
                                            <div className="room-item__info-elem">
                                                <span>Открытая игра</span>
                                                <img src="../../images/icons/door-open.svg" width="15" height="13" alt=""/>
                                            </div>

                                        </div>
                                        <a href="#" className="room-item__btn min-btn">
                                            Присоединиться
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="page-rooms__more-btn alt-btn _transparent visible-on-table">
                                Показать ещё
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GamesSingle;