import { createSlice } from "@reduxjs/toolkit"


const Slice = createSlice({
    name: 'dictionary',
    initialState: [
        {
            en: 'Red',
            tr: 'Kırmızı'
        },
        {
            en: 'Blue',
            tr: 'Mavi'
        },
    ],
    reducers: {
        addWord: (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
        }
    }
})

export default Slice
export const { addWord } = Slice.actions