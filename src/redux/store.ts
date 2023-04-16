import { configureStore } from '@reduxjs/toolkit'
import bugsReducer from './bugsReducer'
import prioriyReducer from './prioriyReducer'

export const store = configureStore({
    reducer: {
        bugs: bugsReducer,
        priority: prioriyReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
