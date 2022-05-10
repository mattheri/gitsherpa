import { BranchStatus } from "app/app";

class Sherpa {
  private stepGenerator: Generator<string, void, void>;
  private conflictStepGenerator: Generator<string, void, void>;

  logicalSteps = [
    BranchStatus.START,
    BranchStatus.ADD,
    BranchStatus.COMMIT,
    BranchStatus.PUSH,
    BranchStatus.CHECKOUT_MAIN,
    BranchStatus.SYNC_MAIN,
  ];

  conflictsNextLogical = [
    BranchStatus.CHECKOUT_MAIN,
    BranchStatus.SYNC_MAIN,
    BranchStatus.CHECKOUT_BRANCH,
    BranchStatus.MERGE_MAIN,
    BranchStatus.RESOLVE_CONFLICT,
    BranchStatus.ADD,
    BranchStatus.COMMIT,
    BranchStatus.PUSH,
  ];

  constructor() {
    this.stepGenerator = this.steps();
    this.conflictStepGenerator = this.conflictSteps();
  }

  private *steps() {
    const keys = this.logicalSteps;

    for (const key of keys) {
      yield key;
    }
  }

  private *conflictSteps() {
    const keys = this.conflictsNextLogical;

    for (const key of keys) {
      yield key;
    }
  }

  resetSteps() {
    this.stepGenerator = this.steps();
  }

  resetConflictSteps() {
    this.conflictStepGenerator = this.conflictSteps();
  }

  nextLogical() {
    let next = this.stepGenerator.next();

    if (next.done) {
      this.resetSteps();
      next = this.stepGenerator.next();
    }

    return next.value;
  }

  nextConflict() {
    let next = this.conflictStepGenerator.next();

    if (next.done) {
      this.resetConflictSteps();
      next = this.conflictStepGenerator.next();
    }

    return next.value;
  }
}

export default new Sherpa();
