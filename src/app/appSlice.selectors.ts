import { RootState } from "store/store.interfaces";

const isGitInitialized = (state: RootState) => state.app.isGitInitialized;

const isGitRepositoryInitialized = (state: RootState) =>
  state.app.isGitRepositoryInitialized;

const isGitRepositoryClean = (state: RootState) =>
  state.app.isGitRepositoryClean;

const currentBranch = (state: RootState) => state.app.currentBranch;

export default {
  isGitInitialized,
  isGitRepositoryInitialized,
  isGitRepositoryClean,
  currentBranch,
};
