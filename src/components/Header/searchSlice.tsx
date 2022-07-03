import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export type ISearch = {
    showSearch: boolean
}
const initialState:ISearch = {
    showSearch: false
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        toggleSearch: (state) => {
            state.showSearch = !state.showSearch
        }
    }
})

export const {toggleSearch} = searchSlice.actions;
export default searchSlice.reducer;