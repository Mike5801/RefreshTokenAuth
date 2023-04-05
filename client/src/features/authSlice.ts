import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReadUser } from '../interfaces/User';

export interface Session {
  user?: string;
  token?: string;
  occupation?: string;
  picture?: string;
  birthDate?: Date
  persist: boolean
}

const PERSIST = localStorage.getItem("persist")

const initialState: Session = {
  token: undefined,
  persist: PERSIST ? JSON.parse(PERSIST) : false
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
      state.persist = false
    },
    setUser: (state, action: PayloadAction<ReadUser>) => {
      state.user = action.payload.user
      state.picture = action.payload.picture
      state.occupation = action.payload.occupation
      state.birthDate = action.payload.birthDate
    },
    setPersist: (state) => {
      state.persist = !state.persist
    }
  }
})

export const { setToken, logOut, setUser, setPersist } = authSlice.actions

export default authSlice.reducer
