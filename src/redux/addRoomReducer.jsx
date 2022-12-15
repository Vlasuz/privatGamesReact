import { ADD_ROOM_FOR_GAME } from "./types";

const initialState = {
    rooms: [
        {
            id: 0,
            gameIs: 'durak',
            title: "Дурак классический",
            typeOfValue: "money",
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            access: true,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../../images/account/avatar.png"
                },
            ]
        },
        {
            id: 1,
            gameIs: 'durak',
            title: "Дурак переводной",
            typeOfValue: "chips",
            // icon: "images/icons/cards.svg",
            date: ["11.03.2022", "12:43"],
            people: {
                nowLength: 2,
                maxLength: 6,
            },
            access: true,
            typeOfGame: 'transferable',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../../images/account/avatar.png"
                },
            ]
        },
    ]
}

export const addRoomReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_ROOM_FOR_GAME:
            return {
                ...state,
                rooms: [...state.rooms, action.data]
            }
        default: return state
    }

}