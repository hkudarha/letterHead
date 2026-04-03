import { useSelector } from "react-redux";
import "../../style/PageLoader.css";

const PageLoader = () => {
  const loading = useSelector((state) => state.loader.loading);
  if (!loading) return null;
  return (
    <>
      <div className="PageLoader">
        <div className="whirly-loader"></div>
      </div>
    </>
  );
};

export default PageLoader;
