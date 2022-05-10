import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store.interfaces";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
