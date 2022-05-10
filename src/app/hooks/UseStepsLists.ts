import Sherpa from "app/services/sherpa.service";

const useStepsLists = () => {
  return {
    logicalSteps: Sherpa.logicalSteps,
    conflictsSteps: Sherpa.conflictsNextLogical,
  };
};

export default useStepsLists;
