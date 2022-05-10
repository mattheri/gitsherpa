import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "./auth";
import { AuthState } from "./auth.interfaces";

const addUser = (state: AuthState, { payload }: PayloadAction<User>) => {
  state.user = payload;
};

const addRedirectTo = (
  state: AuthState,
  { payload }: PayloadAction<{ redirectTo: string }>
) => {
  state.redirectTo = payload.redirectTo;
};

const reducers = {
  addUser,
  addRedirectTo,
};

export default reducers;
