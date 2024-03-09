import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = [{ en: 'hello', tr: 'merhaba' }];

const Slice = createSlice({
    name: 'dictionary',
    initialState: initialState,
    reducers: {
        addWord: (state, action) => {
            state.push(action.payload);
        }
    }
})

export default Slice

export const loadInitialState = () => async (dispatch) => {
    try {
        const value = await AsyncStorage.getItem('@word');
        if (value !== null) {
            dispatch(addWord(JSON.parse(value)));
        }
    } catch (error) {
        console.error('Error loading initial state:', error);
    }
};

export const { addWord } = Slice.actions


