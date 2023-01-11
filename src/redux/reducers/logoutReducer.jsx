import { LOGOUT } from "../types";

const initialState = {
    auth: true,
}

export const logoutReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGOUT:
            return{
                ...state,
                auth: !state.auth
            }
        default: return state
    }

}