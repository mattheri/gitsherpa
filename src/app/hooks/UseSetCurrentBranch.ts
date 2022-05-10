import useAppDispatch from "store/hooks/UseAppDispatch";
import { setCurrentBranch } from "app/appSlice";

const useSetCurrentBranch = () => {
  const dispatch = useAppDispatch();

  return (newBranch: string) => {
    dispatch(setCurrentBranch(newBranch));
  };
};

export default useSetCurrentBranch;
