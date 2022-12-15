import React from 'react';
import {NavLink} from "react-router-dom";

const MainRoomsList = (props) => {
    return (
        <ul className="rooms__list">

            {
                props.states.map(room =>
                    <li key={room.id} className="rooms__item room-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="room-item__body">
                            <div className="room-item__header">
                                <img src="images/icons/cards.svg" width="18" height="18" alt=""
                                     className="room-item__icon"/>
                                <h3 className="room-item__name" title="{room.title}">
                                    {room.title}
                                </h3>
                                <time className="room-item__time" dateTime="2022-03-12 12:43">
                                    {room.date[0]} <b>{room.date[1]}</b>
                                </time>
                            </div>
                            <div className="room-item__info">
                                <div className="room-item__info-elem">
                                            <span>
                                                {room.people.now_playing}
                                                /
                                                {room.people.max_length}
                                            </span>
                                    <img src="images/icons/person.svg" width="10" height="10" alt=""/>
                                </div>
                                <div className="room-item__info-elem">
                                    <img src="images/icons/chip.svg" width="16" height="16" alt=""/>
                                </div>
                                <div className="room-item__info-elem">
                                    <span>{room.access ? "Открытая игра" : "Закрытая игра"}</span>
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
    );
};

export default MainRoomsList;