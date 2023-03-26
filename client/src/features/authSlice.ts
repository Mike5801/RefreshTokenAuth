import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ReadUser } from '../interfaces/User';

interface Session {
  user?: string;
  token?: string;
  occupation?: string;
  picture?: string
}

const initialState: Session = {
  user: undefined,
  token: undefined
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | undefined>) => {
      state.token = action.payload
    },
    logOut: (state) => {
      state.user = undefined
      state.token = undefined
    },
    setUser: (state, action: PayloadAction<ReadUser>) => {
      state.user = action.payload.user
      state.picture = action.payload.picture
      state.occupation = action.payload.occupation
    }
  }
})

export const { setToken, logOut } = authSlice.actions

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token

export default authSlice.reducer
