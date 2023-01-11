// import { CARDS_DELETE_VALUE } from "../types";
// import {cardsListReducer} from "./cardsListReducer";
//
// const initialState = {
//     cards: [
//         {id: 0, card_type: 9, card_suit: 1},
//         {id: 1, card_type: 10, card_suit: 2},
//         {id: 2, card_type: 11, card_suit: 3},
//         {id: 3, card_type: 13, card_suit: 2},
//         {id: 4, card_type: 14, card_suit: 2},
//     ]
// }
//
// export const cardsListDeleteReducer = (state = initialState, action) => {
//
//     switch(action.type) {
//         case CARDS_DELETE_VALUE:
//             const newList = state.cards.filter(item => item.id !== action.id)
//             console.log(newList)
//             return { ...state, ...newList }
//         default: return state
//     }
//
// }