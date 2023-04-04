import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ReadUser } from '../interfaces/User';

export interface General {
  users?: Array<ReadUser>,
}

const initialState: General = {
  users: []
}

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<ReadUser> | undefined>) => {
      state.users = action.payload
    }
  }
})

export const { setUsers } = generalSlice.actions

export default generalSlice.reducer
