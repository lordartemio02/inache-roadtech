import { RouterProvider } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";
import { getRoutes } from "./routers/basicRouters";

const App = () => {
  return (
    <>
      <RouterProvider router={getRoutes()} />
    </>
  );
};

export default App;
