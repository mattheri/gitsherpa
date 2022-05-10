export interface AppState {
  isGitInitialized: boolean;
  isGitRepositoryInitialized: boolean;
  isGitRepositoryClean: boolean;
  currentBranch: string | null;
}
