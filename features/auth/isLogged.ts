import { createSlice } from '@reduxjs/toolkit'

const isLogged = createSlice({
    name: 'isLogged',
    initialState: {
        isLogged: false,
    },
    reducers: {
        addIsLogged: (state, action) => {
            state.isLogged = action.payload
        },
        clearIsLogged: (state) => {
            state.isLogged = false
        },
    },
})

export const { addIsLogged, clearIsLogged } = isLogged.actions

export default isLogged.reducer
