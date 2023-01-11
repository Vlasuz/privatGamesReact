import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import RoomItem from "../RoomItem";

const MainRoomsList = () => {

    const rooms = useSelector(state => {
        const { addRoomReducer } = state;
        return addRoomReducer.rooms
    })

    return (
        <ul className="rooms__list">

            {
                rooms.map(room =>
                    <RoomItem data={room} key={room.id} />
                )
            }

        </ul>
    );
};

export default MainRoomsList;