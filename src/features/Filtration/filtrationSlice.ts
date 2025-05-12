import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export type TransferFilter = 'all' | '1' | '2' | '3' | '0'

type initialStateType = TransferFilter[]

export const filtrationSlice = createSlice({
  name: 'filtration',
  initialState: [] as initialStateType,
  selectors: {
    selectFiltration: (state) => state,
  },
  reducers: (create) => ({
    changeFilterAC: create.reducer<{ id: string; filter: TransferFilter }>(
      (state, action) => {
        const currentIndex = state.findIndex(
          (filter) => filter === action.payload.filter,
        )

        if (currentIndex === -1) {
          state.push(action.payload.filter)
        }

        if (currentIndex !== -1) {
          state.splice(currentIndex, 1)
        }
      },
    ),
  }),
})

export const { changeFilterAC } = filtrationSlice.actions

export const selectCount = (state: RootState) => state.filtration

export const filtrationReducer = filtrationSlice.reducer
