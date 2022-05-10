import { AppState } from "./appSlice.interfaces";

import { createSlice } from "@reduxjs/toolkit";

import reducers from "./appSlice.reducers";

const initialState: AppState = {
  isGitInitialized: false,
  isGitRepositoryInitialized: false,
  isGitRepositoryClean: false,
  currentBranch: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const {
  initializeGit,
  initializeGitRepository,
  setCurrentBranch,
  setGitRepositoryClean,
} = appSlice.actions;

export default appSlice.reducer;
