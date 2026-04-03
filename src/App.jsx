import React from "react";
import "./App.css";
import PageLoader from "./components/loader/PageLoader";
import RouterPage from "./components/RouterPage";
import ScrollToTop from "./constants/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    <ScrollToTop/>
      <PageLoader />
      <RouterPage/>
    </>
  );
}

export default App;
