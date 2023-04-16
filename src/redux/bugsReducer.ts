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
    {
        id: ':ewe',
        title: 'Buttone non funziona',
        description: 'non funziona click',
        creator: 'Ivan Rossi',
        priority: 3,
        state: 'Pending',
        dateCreation: '2020/12/23',
        dateLastChange: '',
    },
    {
        id: 'frs/',
        title: 'inserire route',
        description: 'non funziona route delle pagine',
        creator: 'Andrea Infantino',
        priority: 2,
        state: 'Open',
        dateCreation: '2023/02/26',
        dateLastChange: '',
    },
    {
        id: 'grs/',
        title: 'inserire route',
        description: 'non funziona route delle pagine',
        creator: 'Andrea Infantino',
        priority: 1,
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
            state.push(action.payload)
        },
        deleteBug: (state, action: PayloadAction<Bug>) => {
            return state.filter((b) => b.id !== action.payload.id)
        },
        changePriority: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.priority,
        }),
        // updateBug: (state, action: PayloadAction<Bug>) => {
        //     const index: number = state.findIndex(
        //         (bug) => bug.id === action.payload.id
        //     )
        //     return (state[index] = action.payload)
        // },
    },
})

export const { createBug, deleteBug, changePriority } = bugSlice.actions
export default bugSlice.reducer
