import { LOGOUT, ACCOUNT_SETTINGS_DATA, ACCOUNT_SETTINGS_PHOTO, ADD_ROOM_FOR_GAME } from "./types";

export function actionLogout() {
    return{
        type: LOGOUT
    }
}
export function accountInformation(info) {
    return{
        type: ACCOUNT_SETTINGS_DATA,
        info
    }
}
export function accountPhoto(photo) {
    return{
        type: ACCOUNT_SETTINGS_PHOTO,
        photo
    }
}
export function addRoomAction(data) {
    return{
        type: ADD_ROOM_FOR_GAME,
        data
    }
}