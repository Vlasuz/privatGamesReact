import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Pagination from "../components/Pagination";

const Rooms = (props) => {

    const rooms = useSelector(state => {
        const { addRoomReducer } = state;
        return addRoomReducer.rooms
    })

    return (
        <main className="main">
            <section className="page-rooms page-padding">
                <div className="page-rooms__container container">
                    <div className="page-rooms__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <Link to={"/"} className="page-rooms__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </Link>
                        <h2 className="page-rooms__section-title section-title page-header__title _decor-none">
                            Комнаты
                        </h2>
                        <div className="page-rooms__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <a href="index.html" className="page-header__bread-crumbs--link">
                                        Главная
                                    </a>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        Все комнаты
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-rooms__main" data-aos="fade-in" data-aos-delay="400">
                        <div className="page-rooms__main--header">
                            <h3 className="page-rooms__main--title">
                                Выберите комнату
                            </h3>
                            <Link to={"/create-room"}
                               className="page-rooms__main--create-btn btn _large-2 _min-fs hide-on-table">
                                Добавить комнату
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                                        fill="#F9F1DF"/>
                                </svg>
                            </Link>
                        </div>
                        <ul className="page-rooms__list">

                            {
                                rooms.map(room =>
                                    <li key={room.id} className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
                                        <div className="room-item__body">
                                            <div className="room-item__header">
                                                <img src={room.gameIs === 'durak' ? "images/icons/cards.svg" : ""} width="18" height="18" alt=""
                                                     className="room-item__icon"/>
                                                <h3 className="room-item__name" title={room.title}>
                                                    {room.title}
                                                </h3>
                                                <time className="room-item__time" dateTime="2022-03-12 12:43">
                                                    {room.date[0]} <b>{room.date[1]}</b>
                                                </time>
                                            </div>
                                            <div className="room-item__info">
                                                <div className="room-item__info-elem">
                                                    <span>
                                                        {room.people.nowLength}
                                                        /
                                                        {room.people.maxLength}
                                                    </span>
                                                    <img src="images/icons/person.svg" width="10" height="10" alt=""/>
                                                </div>
                                                <div className="room-item__info-elem">
                                                    <img src="images/icons/chip.svg" width="16" height="16" alt=""/>
                                                </div>
                                                <div className="room-item__info-elem">
                                                    <span>
                                                        {room.isAccess ? "Открытая игра" : "Закрытая игра"}
                                                    </span>
                                                    <img src="images/icons/door-open.svg" width="15" height="13" alt=""/>
                                                </div>

                                            </div>
                                            <NavLink to={'/rooms/'+room.id} className="room-item__btn min-btn">
                                                Присоединиться
                                            </NavLink>
                                        </div>
                                    </li>
                                )
                            }


                        </ul>
                        <a href="#" className="page-rooms__more-btn alt-btn _transparent visible-on-table">
                            Показать ещё
                        </a>
                        <Pagination/>
                    </div>
                </div>
                <a href="rooms-create.html" className="page-rooms__create-min-btn visible-on-table"
                   title="Добавить комнату">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                            fill="#F9F1DF"/>
                    </svg>
                </a>
            </section>
        </main>
    );
};

export default Rooms;