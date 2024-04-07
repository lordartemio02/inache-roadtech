import { createBrowserRouter } from "react-router-dom";
import {
  BasePage,
  MapPage,
  NotFoundPage,
  RoadPage,
  StoryLocationPage,
  StorySliderPage,
} from "../pages";
import LoginPage from "../pages/LoginPage";

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
    path: "/road/:id",
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
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export const getRoutes = () => {
  return createBrowserRouter(basicRoutes);
};
