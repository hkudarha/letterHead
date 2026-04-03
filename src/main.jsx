import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageLoader from "./components/loader/PageLoader.jsx";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PageLoader />
        <App />
        <Toaster />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
