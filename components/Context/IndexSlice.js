import { createSlice } from "@reduxjs/toolkit"

const IndexSlice = createSlice({
    name: 'index',
    initialState: 0,
    reducers: {
        increaseIndex: (state) => {
            return state + 1
        },
        decreaseIndex: (state) => {
            return state - 1
        }

    }
})

export default IndexSlice
export const { increaseIndex, decreaseIndex } = IndexSlice.actions