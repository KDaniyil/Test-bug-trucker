import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Bug } from 'utils/bugModel'

const initialState: Bug[] = [
    {
        id: ':ere',
        title: 'Buttone non funziona',
        description: 'non funziona click',
        creator: 'Ivan Rossi',
        priority: 3,
        state: 'Pending',
        dateCreation: '2020/12/23',
        dateLastChange: '',
    },
    {
        id: 'sda-',
        title: 'inserire i controli per form',
        description: 'contollare che tutti i dati sono stati completati',
        creator: 'Giovanni Verga',
        priority: 1,
        state: 'Closed',
        dateCreation: '2023/03/23',
        dateLastChange: '',
    },
    {
        id: 'fes/',
        title: 'inserire route',
        description: 'non funziona route delle pagine',
        creator: 'Andrea Infantino',
        priority: 2,
        state: 'Open',
        dateCreation: '2023/02/26',
        dateLastChange: '',
    },
]

export const bugSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        createBug: (state, action: PayloadAction<Bug>) => {
            void state.push(action.payload)
        },
        deleteBug: (state, action: PayloadAction<Bug>) => {
            return state.filter((p) => p.id !== action.payload.id)
        },
        updateBug: (state, action: PayloadAction<Bug>) => {},
    },
})

export const { createBug, updateBug, deleteBug } = bugSlice.actions
export default bugSlice.reducer
