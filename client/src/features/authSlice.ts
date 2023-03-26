import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from "../interfaces/Auth"
import type { RootState } from '../store'

interface Session {
  user?: string;
  token?: string;
}

const initialState: Session = {
  user: undefined,
  token: undefined
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      const { user, accessToken } = action.payload
      state.user = user
      state.token = accessToken
    },
    logOut: (state) => {
      state.user = undefined
      state.token = undefined
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token

export default authSlice.reducer
