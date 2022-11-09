import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
};

const topicsSlice = createSlice(options);

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;