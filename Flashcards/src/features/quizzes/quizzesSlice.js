import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
        }
    }
}

const quizzesSlice = createSlice(options);

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;