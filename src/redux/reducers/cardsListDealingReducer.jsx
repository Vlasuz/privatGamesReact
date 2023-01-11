import { THREE_CARDS_DEALING } from "../types";

const initialState = {
    cards: [
        {id: 12, card_type: 10, card_suit: 1},
        {id: 22, card_type: 11, card_suit: 1},
        {id: 32, card_type: 12, card_suit: 3},
    ]
}

export const cardsListDealingReducer = (state = initialState, action) => {

    switch(action.type) {
        case THREE_CARDS_DEALING:
            return{
                ...state,
                cards: []
            }
        default: return state
    }

}