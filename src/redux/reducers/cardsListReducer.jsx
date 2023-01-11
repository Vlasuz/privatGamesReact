import {CARDS_DELETE_VALUE, CARDS_VALUE} from "../types";

const initialState = {
    cards: [
        {id: 0, card_type: 9, card_suit: 1},
        {id: 1, card_type: 10, card_suit: 2},
        {id: 2, card_type: 11, card_suit: 3},
        {id: 3, card_type: 13, card_suit: 2},
        {id: 4, card_type: 14, card_suit: 2},
    ]
}

export const cardsListReducer = (state = initialState, action) => {

    console.log(action)

    switch(action.type) {
        case CARDS_VALUE:
            return{
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        case CARDS_DELETE_VALUE:
            console.log(state.cards)
            const newList = state.cards.filter(item => +item.id !== +action.id)
            console.log(newList)
            return {
                ...state,
                cards: newList
            }
        default: return state
    }

}
