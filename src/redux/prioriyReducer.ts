import { createSlice } from '@reduxjs/toolkit'

type PriorityType = {
    [id: string]: string
}
const initialState: PriorityType = {}

export const prioritySlice = createSlice({
    name: 'priority',
    initialState,
    reducers: {
        changePriority: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.priority,
        }),
    },
})

export const { changePriority } = prioritySlice.actions
export default prioritySlice.reducer
