import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import IndexSlice from "./IndexSlice";



export const Store = configureStore({
    reducer: {
        dictionary: Slice.reducer,
        index: IndexSlice.reducer,
    },
})