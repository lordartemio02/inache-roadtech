import { createBrowserRouter } from "react-router-dom";
import { BasePage } from "../pages";
import NotFoundPage from "../pages/NotFoundPage";

const basicRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <BasePage />,
  },
];

export const getRoutes = () => {
  return createBrowserRouter(basicRoutes);
};
