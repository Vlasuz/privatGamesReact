import { combineReducers } from "redux";
import { logoutReducer } from "./logoutReducer";
import { accountInformationReducer } from "./accountInformationReducer";
import {accountPhotoReducer} from "./accountPhotoReducer";
import {addRoomReducer} from "./addRoomReducer";
import {GamesSearchReducer} from "./gamesSearchReducer";
import {newsListReducer} from "./newsListReducer";
import {GamesListReducer} from "./gamesListReducer";
import {GamesCatalogListReducer} from "./gamesCatalogListReducer";
import {accountBalanceReducer} from "./accountBalanceReducer";
import {cardsListReducer} from "./cardsListReducer";
import {cardsListDealingReducer} from "./cardsListDealingReducer";
import {gameResultReducer} from "./gameResultReducer";

export const rootReducer = combineReducers({
    logoutReducer,
    accountInformationReducer,
    accountPhotoReducer,
    addRoomReducer,
    newsListReducer,
    GamesSearchReducer,
    GamesListReducer,
    GamesCatalogListReducer,
    accountBalanceReducer,
    cardsListReducer,
    cardsListDealingReducer,
    gameResultReducer,
})