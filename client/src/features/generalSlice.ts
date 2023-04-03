import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ReadUser } from '../interfaces/User';

interface Session {
  users?: Array<ReadUser>
}

const initialState: Session = {
  users: undefined
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
