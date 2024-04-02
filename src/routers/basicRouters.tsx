import { createBrowserRouter } from "react-router-dom";
import { BasePage, NotFoundPage } from "../pages";

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
