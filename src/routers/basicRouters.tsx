import { createBrowserRouter } from "react-router-dom";
import {
  BasePage,
  MapPage,
  NotFoundPage,
  RoadPage,
  StoryLocationPage,
  StorySliderPage,
} from "../pages";
import AddStoriesPage from "../pages/AddStoriesPage";
import InfoLocationPage from "../pages/InfoLocationPage";
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
  {
    path: "/location/:id",
    element: <InfoLocationPage />,
  },
  {
    path: "/story-create/:id",
    element: <AddStoriesPage />,
  },
];

export const getRoutes = () => {
  return createBrowserRouter(basicRoutes);
};
