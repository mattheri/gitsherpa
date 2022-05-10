import Sherpa from "app/services/sherpa.service";

const useSherpa = (isConflict: boolean = false) => {
  return isConflict
    ? Sherpa.nextConflict.bind(Sherpa)
    : Sherpa.nextLogical.bind(Sherpa);
};

export default useSherpa;
