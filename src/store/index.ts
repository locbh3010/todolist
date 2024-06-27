import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import authSlice from './auth/slice'

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat([thunk])
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { AppDispatch, RootState }

export const dispatchAction = store.dispatch

export default store
