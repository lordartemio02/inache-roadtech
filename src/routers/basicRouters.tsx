import { createBrowserRouter } from "react-router-dom";
import { BasePage, MapPage, NotFoundPage, RoadPage } from "../pages";

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
  {
    path: "/road",
    element: <RoadPage />,
  },
];

export const getRoutes = () => {
  return createBrowserRouter(basicRoutes);
};
