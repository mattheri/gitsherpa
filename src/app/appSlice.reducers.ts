import { AppState } from "./appSlice.interfaces";

import { PayloadAction } from "@reduxjs/toolkit";

const initializeGit = (
  state: AppState,
  { payload }: PayloadAction<boolean>
) => {
  state.isGitInitialized = payload;
};

const initializeGitRepository = (
  state: AppState,
  { payload }: PayloadAction<boolean>
) => {
  state.isGitRepositoryInitialized = payload;
};

const setGitRepositoryClean = (
  state: AppState,
  { payload }: PayloadAction<boolean>
) => {
  state.isGitRepositoryClean = payload;
};

const setCurrentBranch = (
  state: AppState,
  { payload }: PayloadAction<string | null>
) => {
  state.currentBranch = payload;
};

const reducers = {
  initializeGit,
  initializeGitRepository,
  setGitRepositoryClean,
  setCurrentBranch,
};

export default reducers;
