import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DefaultLayout from "./layout/DefaultLayout";
import Contact from "./pages/Contact";
import ChartsAndMaps from "./pages/ChartsAndMaps";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Contact />,
      },
      {
        path: "/visuals",
        element: <ChartsAndMaps />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
