export interface App {}

export enum BranchStatus {
  START = "START",
  ADD = "ADD",
  COMMIT = "COMMIT",
  PUSH = "PUSH",
  SYNC_MAIN = "SYNC_MAIN",
  MERGE_MAIN = "MERGE_MAIN",
  RESOLVE_CONFLICT = "RESOLVE_CONFLICT",
  CHECKOUT_MAIN = "CHECKOUT_MAIN",
  CHECKOUT_BRANCH = "CHECKOUT_BRANCH",
}