import { createBrowserRouter } from "react-router-dom";
import {
  BasePage,
  MapPage,
  NotFoundPage,
  RoadPage,
  StoryLocationPage,
} from "../pages";

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
  {
    path: "/story-location",
    element: <StoryLocationPage />,
  },
];

export const getRoutes = () => {
  return createBrowserRouter(basicRoutes);
};
