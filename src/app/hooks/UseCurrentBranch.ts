import selectors from "app/appSlice.selectors";
import useAppSelector from "store/hooks/UseAppSelector";

const useCurrentBranch = () => {
  return useAppSelector(selectors.currentBranch);
};

export default useCurrentBranch;
