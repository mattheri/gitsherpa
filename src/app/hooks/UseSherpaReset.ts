import Sherpa from "app/services/sherpa.service";

const useSherpaReset = () => {
  return () => {
    Sherpa.resetSteps();
    Sherpa.resetConflictSteps();
  };
};

export default useSherpaReset;
