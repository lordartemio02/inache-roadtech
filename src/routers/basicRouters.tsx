import { createBrowserRouter } from "react-router-dom";
import { BasePage, NotFoundPage, MapPage } from "../pages";

const basicRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <BasePage />,
  },
  {
    path: "/map",
    element: <MapPage />,
  },
];

export const getRoutes = () => {
  return createBrowserRouter(basicRoutes);
};
