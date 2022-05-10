import { RootState } from "store/store.interfaces";

import AuthService from "./service/auth.service";

const getCurrentUser = (state: RootState) => {
  if (!state.auth.user) {
    const authService = new AuthService();

    return authService.currentUser();
  }

  return state.auth.user;
};

const getRedirectionURL = (state: RootState) => state.auth.redirectTo;

const selectors = {
  getCurrentUser,
  getRedirectionURL,
};

export default selectors;
