import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "../redux/slice/loaderSlice";


export const usePageLoader = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loader.loading);

  const triggerShow = () => dispatch(showLoader());
  const triggerHide = () => dispatch(hideLoader());

  return {
    isLoading,
    showLoader: triggerShow,
    hideLoader: triggerHide,
  };
};
