import React from 'react';
import Main from "./Main";
import {Routes, Route} from "react-router-dom";
import Games from "./Games";
import Rooms from "./Rooms";
import News from "./News";
import RoomCreate from "./RoomCreate";
import AccountMain from "./pages_account/AccountMain";
import AccountSettings from "./pages_account/AccountSettings";
import AccountReferal from "./pages_account/AccountReferal";
import AccountHistory from "./pages_account/AccountHistory";
import AccountWithdrawals from "./pages_account/AccountWithdrawals";
import Error404 from "./Error404";
import NewsSingle from "./NewsSingle";
import GamesSingle from "./GamesSingle";
import ScrollToTop from "../hooks/ScrollToTop";
import RoomSingle from "./RoomSingle";

const Routers = (props) => {
    ScrollToTop()

    const newsList = [
        {
            id: '0',
            type: "company",
            date: ['2022-12-12', '12:43'],
            title: "Название новости или статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '1',
            type: "other",
            date: ['2022-12-12', '12:43'],
            title: "zxcНазвание статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '2',
            type: "company",
            date: ['2022-12-12', '12:43'],
            title: "asdНазвание статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '3',
            type: "other",
            date: ['2022-12-12', '12:43'],
            title: "qweНазвание статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '4',
            type: "company",
            date: ['2022-12-12', '12:43'],
            title: "321Название статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '5',
            type: "other",
            date: ['2022-12-12', '12:43'],
            title: "123Название статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
        {
            id: '6',
            type: "company",
            date: ['2022-12-12', '12:43'],
            title: "123Название статьи",
            image: "images/main-page/news/image-large.jpg",
            text: "non auctor sit amet, egestas id neque. Donec non eleifend",
        },
    ];
    const gamesList = [
        {
            catalog_name: "Популярное",
            catalog_id: "0",
            icon: "images/icons/hot.svg",
            list_of_catalog: [
                {
                    id: '0',
                    title_of_game: "Шахматы японские - 1",
                    image: "images/main-page/games/image-1.png",
                }
            ]
        },
        {
            catalog_name: "Шахматы",
            catalog_id: "1",
            icon: "images/icons/chess.svg",
            list_of_catalog: [
                {
                    id: '1',
                    title_of_game: "Шахматы японские - 2",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '2',
                    title_of_game: "Шахматы японские - 3",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '3',
                    title_of_game: "Шахматы японские - 4",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        },
        {
            catalog_name: "Фишки",
            catalog_id: "2",
            icon: "images/icons/chips.svg",
            list_of_catalog: [
                {
                    id: '4',
                    title_of_game: "Шахматы японские - 5",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '5',
                    title_of_game: "Шахматы японские - 6",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        },
        {
            catalog_name: "Домино",
            catalog_id: "3",
            icon: "images/icons/domino.svg",
            list_of_catalog: [
                {
                    id: '6',
                    title_of_game: "Шахматы японские - 7",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '7',
                    title_of_game: "Шахматы японские - 8",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        },
        {
            catalog_name: "Карточные",
            catalog_id: "4",
            icon: "images/icons/cards.svg",
            list_of_catalog: [
                {
                    id: '8',
                    title_of_game: "Шахматы японские - 9",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '9',
                    title_of_game: "Шахматы японские - 10",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        }
    ];
    const roomsList = [
        {
            id: 0,
            title: "Дурак классический",
            icon: "images/icons/cards.svg",
            date: ["12.03.2022", "12:43"],
            people: {
                now_playing: 4,
                max_length: 10,
            },
            access: true,
        },
        {
            id: 1,
            title: "Дурак зеленый",
            icon: "images/icons/cards.svg",
            date: ["12.01.2022", "04:43"],
            people: {
                now_playing: 14,
                max_length: 20,
            },
            access: false,
        }
    ]

    const routers = [
        {path: "*", comp: <Error404/>},
        {path: "/", comp: <Main states={[newsList, gamesList, roomsList]}/>},

        {path: "/rooms", comp: <Rooms roomsList={roomsList} />},
        {path: "/create-room", comp: <RoomCreate/>},
        {path: "/rooms/:roomId", comp: <RoomSingle roomsList={roomsList} />},

        {path: "/games", comp: <Games gamesList={gamesList} />},
        {path: "/games/:catalogId/:gamesId", comp: <GamesSingle gamesList={gamesList} />},

        {path: "/news", comp: <News newsList={newsList} />},
        {path: "/news/:newsId", comp: <NewsSingle newsList={newsList} />},

        {path: "/account-main", comp: <AccountMain/>},
        {path: "/account-settings", comp: <AccountSettings />},
        {path: "/account-history", comp: <AccountHistory/>},
        {path: "/account-referal", comp: <AccountReferal/>},
        {path: "/account-withdrawals", comp: <AccountWithdrawals/>},
    ]

    return (

        <Routes>
            {
                routers.map((elem, key) =>
                    <Route key={key} path={elem.path} element={elem.comp}/>
                )
            }
        </Routes>
    );
};

export default Routers;