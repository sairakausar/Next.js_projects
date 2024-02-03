import { createSlice } from "@reduxjs/toolkit";
// ya khan sa liya ha

export const counterSlice = createSlice({
    name: 'counterApp', 
    initialState: {
        // state 
        counter: 1,
    },
    reducers: {
        // Action
        // action have state
        increment: (state) => {
            state.counter = state.counter + 1
        },
        decrement: (state) => {
            state.counter = state.counter - 1
        }
    }
})

export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
