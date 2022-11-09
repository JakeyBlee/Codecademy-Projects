import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
        }
    }
};

const cardsSlice = createSlice(options);

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;