import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";
import Loader from "./components/Loader";
import { getRoutes } from "./routers/basicRouters";
import { useRefreshMutation } from "./store/api/authApi";
import { onAuthAction } from "./store/slices/authSlice";
import { RootState } from "./store/store";

const App = () => {
  const role = useSelector((state: RootState) => state.reducerAuth.role);
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const refreshToken = async () => {
    try {
      await refresh({}).unwrap();
      dispatch(onAuthAction());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <>
      <a href="https://market.yandex.ru/?clid=4710321" className="hidden">
        https://market.yandex.ru/?clid=4710321
      </a>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <RouterProvider
          router={getRoutes(role === "ADMIN", role === "CLIENT")}
        />
      )}
    </>
  );
};

export default App;
