import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.interfaces";
import reducers from "./auth.reducers";

const initialState: AuthState = {
  user: null,
  redirectTo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { addRedirectTo, addUser } = authSlice.actions;

export default authSlice.reducer;
