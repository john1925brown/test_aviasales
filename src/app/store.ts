import { configureStore } from '@reduxjs/toolkit'
import { filtrationReducer, filtrationSlice } from '../features/Filtration/FiltrationSlice'

export const store = configureStore({
  reducer: {
    [filtrationSlice.name]: filtrationReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
