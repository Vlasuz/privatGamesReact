import { GAMES_LIST } from "../types";

const initialState = {
    games: [
        {
            id: '1',
            title: "Шахматы японские",
            icon: "images/icons/chess.svg",
            image: "images/main-page/games/image-9.png",
            catalog_id: ["0", "1"],
            data: {
                text: "В игре \"Дурак Онлайн\" вашей задачей будет быстрее победить соперников и освободиться от всех карт. Как только до вас будут ходить, отбивайтесь картами соответствующей масти или ели нет тогда козырем. Ходите на соперников такими картами, которые соперник не сможет отбить. Вы должны стать лучшим игроком карточного онлайн дурака, чтобы им не стать! И таким образом повторю этот текст снова: В игре \"Дурак Онлайн\" вашей задачей будет быстрее победить соперников и освободиться от всех карт. Как только до вас будут ходить, отбивайтесь картами соответствующей масти или ели нет тогда козырем. Ходите на соперников такими картами, которые соперник не сможет отбить. Вы должны стать лучшим игроком карточного онлайн дурака!",
                max_gamers: 10,
                currency: {
                    money: true,
                    chips: true,
                },
                type_rooms: {
                    open_rooms: true,
                    close_rooms: true,
                }
            }
        },
        {
            id: '2',
            title: "Шашки китайские",
            icon: "images/icons/chip.svg",
            image: "images/main-page/games/image-3.png",
            catalog_id: ["0", "2"],
            data: {
                text: "Вы должны стать лучшим игроком карточного онлайн дурака!",
                max_gamers: 5,
                currency: {
                    money: true,
                    chips: false,
                },
                type_rooms: {
                    open_rooms: false,
                    close_rooms: true,
                }
            }
        },
        {
            id: '3',
            title: "Шахматы китайские",
            icon: "images/icons/chess.svg",
            image: "images/main-page/games/image-9.png",
            catalog_id: ["0", "1"],
            data: {
                text: "Вы должны стать лучшим игроком карточного онлайн дурака! Вы должны стать лучшим игроком карточного онлайн дурака!",
                max_gamers: 10,
                currency: {
                    money: true,
                    chips: true,
                },
                type_rooms: {
                    open_rooms: true,
                    close_rooms: false,
                }
            }
        },
        {
            id: '4',
            title: "Дурак пентагона",
            icon: "images/icons/cards.svg",
            image: "images/main-page/games/image-7.png",
            catalog_id: ["3"],
            data: {
                text: "Вы должны стать лучшим игроком карточного онлайн дурака! Вы должны стать лучшим игроком карточного онлайн дурака!",
                max_gamers: 10,
                currency: {
                    money: false,
                    chips: true,
                },
                type_rooms: {
                    open_rooms: true,
                    close_rooms: true,
                }
            }
        },
        {
            id: '5',
            title: "Дурак классический",
            icon: "images/icons/cards.svg",
            image: "images/main-page/games/image-5.png",
            catalog_id: ["0", "3"],
            data: {
                text: "В игре \"Дурак Онлайн\" вашей задачей будет быстрее победить соперников и освободиться от всех карт. Как только до вас будут ходить, отбивайтесь картами соответствующей масти или ели нет тогда козырем. Ходите на соперников такими картами, которые соперник не сможет отбить. Вы должны стать лучшим игроком карточного онлайн дурака, чтобы им не стать! И таким образом повторю этот текст снова: В игре \"Дурак Онлайн\" вашей задачей будет быстрее победить",
                max_gamers: 10,
                currency: {
                    money: true,
                    chips: true,
                },
                type_rooms: {
                    open_rooms: true,
                    close_rooms: true,
                }
            }
        },
        {
            id: '6',
            title: "Железные шахматы",
            icon: "images/icons/chess.svg",
            image: "images/main-page/games/image-9.png",
            catalog_id: ["0", "1"],
            data: {
                text: "Вы должны стать лучшим игроком карточного онлайн дурака! Вы должны стать лучшим игроком карточного онлайн дурака!",
                max_gamers: 10,
                currency: {
                    money: true,
                    chips: true,
                },
                type_rooms: {
                    open_rooms: true,
                    close_rooms: true,
                }
            }
        },
    ]
}

export const GamesListReducer = (state = initialState, action) => {

    switch(action.type) {
        case GAMES_LIST:
            return {
                ...state,
                // text: action.text
            }
        default: return state
    }

}