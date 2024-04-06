import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { Loader } from "../components/Loader";
import {
  LoadingStates,
  mapContainerId,
  TLoadingState,
} from "../services/yandexMap";
import { unloadMap } from "../store/slices/mapSlice";
import { loadMap } from "../store/thunk/mapThunk";

import Event from "../services/eventEmitter";

interface IEventEmitter {
  loadingState?: TLoadingState;
  pinData?: any;
}

export const MapPage = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState<TLoadingState>();

  const handleEventEmitter = useCallback(
    ({ loadingState, pinData }: IEventEmitter) => {
      if (loadingState) {
        setProgress(loadingState);
      }

      if (pinData) {
        console.log(pinData, progress);
      }
    },
    [setProgress]
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(loadMap());

    return () => {
      dispatch(unloadMap());
    };
  }, []);

  useEffect(() => {
    Event?.on("add", handleEventEmitter);

    return () => {
      if (Event && Event?.off("add", handleEventEmitter)) {
        Event.off("add", handleEventEmitter);
      }
    };
  }, [handleEventEmitter]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="w-full">
        {progress !== LoadingStates.ready && <Loader />}

        <div id={mapContainerId} />
      </div>
    </div>
  );
};
