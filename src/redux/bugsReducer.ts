import { createSlice } from '@reduxjs/toolkit'
import { Bug } from 'utils/bugModel'

const initialState: Bug[] = [
    {
        id: 1,
        title: 'Buttone non funziona',
        description: 'non funziona click',
        priority: 'High',
        state: 'pending',
        dateCreation: '11/03/2020',
    },
    {
        id: 2,
        title: 'inserire i controli per form',
        description: 'contollare che tutti i dati sono stati completati',
        priority: 'High',
        state: 'pending',
        dateCreation: '11/03/2020',
    },
    {
        id: 3,
        title: 'inserire route',
        description: 'non funziona route delle pagine',
        priority: 'High',
        state: 'pending',
        dateCreation: '11/03/2020',
    },
]

export const bugSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        getBugs: (state) => {},
        createBug: (state, actions) => {},
        updateBug: (state, actions) => {},
        deleteBug: (state, actions) => {},
    },
})

export const { getBugs, createBug, updateBug, deleteBug } = bugSlice.actions
export default bugSlice.reducer
