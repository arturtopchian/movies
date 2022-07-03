import { configureStore } from '@reduxjs/toolkit'
import searchSlice from "../components/Header/searchSlice";
export const store = configureStore({
    reducer: {
        searchSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch