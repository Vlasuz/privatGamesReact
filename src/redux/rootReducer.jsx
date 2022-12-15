import { combineReducers } from "redux";
import { logoutReducer } from "./logoutReducer";
import { accountInformationReducer } from "./accountInformationReducer";
import {accountPhotoReducer} from "./accountPhotoReducer";
import {addRoomReducer} from "./addRoomReducer";

export const rootReducer = combineReducers({
    logoutReducer,
    accountInformationReducer,
    accountPhotoReducer,
    addRoomReducer,
})