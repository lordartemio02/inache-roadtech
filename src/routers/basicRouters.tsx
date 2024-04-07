import { createBrowserRouter } from "react-router-dom";
import {
  BasePage,
  MapPage,
  NotFoundPage,
  RoadPage,
  StoryLocationPage,
  StorySliderPage,
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
  {
    path: "/story/info",
    element: <StorySliderPage />,
  },
];

export const getRoutes = () => {
  return createBrowserRouter(basicRoutes);
};
