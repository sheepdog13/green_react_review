import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: "흥부전",
    pay:5000
}

const bookSlice = createSlice({
        name: "book",
        initialState : initialState,
        reducers: {
            setTitle : (state, action) => {
                state.title = action.payload;
            },
            setPay : (state, action) => {
                state.pay = action.payload;
            }
        }
    })
export const {setTitle, setPay } = bookSlice.actions;

export default bookSlice.reducer