import { createSlice } from '@reduxjs/toolkit'
import { Bug } from 'utils/bugModel'

const initialState: Bug[] = [
    {
        id: ':ere',
        title: 'Buttone non funziona',
        description: 'non funziona click',
        creator: 'Ivan Rossi',
        priority: 3,
        state: 'Pending',
        dateCreation: '11/03/2020',
        dateLastChange: '',
    },
    {
        id: 'sda-',
        title: 'inserire i controli per form',
        description: 'contollare che tutti i dati sono stati completati',
        creator: 'Giovanni Verga',
        priority: 1,
        state: 'Closed',
        dateCreation: '11/03/2020',
        dateLastChange: '',
    },
    {
        id: 'fes/',
        title: 'inserire route',
        description: 'non funziona route delle pagine',
        creator: 'Andrea Infantino',
        priority: 2,
        state: 'Open',
        dateCreation: '11/03/2020',
        dateLastChange: '',
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
