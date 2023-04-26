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
        id: 'sdao',
        title: 'inserire i controli per form',
        description: 'contollare che tutti i dati sono stati completati',
        creator: 'Giovanni Verga',
        priority: 1,
        state: 'Closed',
        dateCreation: '2023/03/23',
        dateLastChange: '',
    },
    {
        id: 'fesm',
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
        id: 'frs.',
        title: 'inserire route',
        description: 'non funziona route delle pagine',
        creator: 'Andrea Infantino',
        priority: 2,
        state: 'Open',
        dateCreation: '2023/02/26',
        dateLastChange: '',
    },
    {
        id: 'grso',
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
        createModifyBug: (state, action: PayloadAction<Bug>) => {
            const index: number = state.findIndex(
                (bug) => bug.id === action.payload.id
            )
            if (index !== -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload)
            }
        },
        deleteBug: (state, action: PayloadAction<Bug>) => {
            return state.filter((b) => b.id !== action.payload.id)
        },
        changePriority: (state, action: PayloadAction<Bug>) => {
            const index: number = state.findIndex(
                (stateBug) => stateBug.id === action.payload.id
            )
            state[index].priority = action.payload.priority
        },
    },
})

export const { createModifyBug, deleteBug, changePriority } = bugSlice.actions
export default bugSlice.reducer
