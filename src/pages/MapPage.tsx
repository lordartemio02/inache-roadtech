import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { unloadMap } from "../store/slices/mapSlice";
import {
  // LoadingStates,
  TLoadingState,
  mapContainerId,
} from "../services/yandexMap";

import Event from '../services/eventEmitter';
import { loadMap } from "../store/thunk/mapThunk";

interface IEventEmitter {
  loadingState?: TLoadingState,
  pinData?: any,
}

export const MapPage = () => {
  const dispatch = useDispatch()
  const [progress, setProgress] = useState<TLoadingState>();

  
  const handleEventEmitter = useCallback(({ loadingState, pinData }: IEventEmitter) => {
    if (loadingState) {
      setProgress(loadingState);
    }

    if (pinData) {
      console.log(pinData, progress);
    }
  }, [setProgress]);

  useEffect(() => {
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


  // if (progress !== LoadingStates.ready) {
  //   return 'LOADING';
  // }

  return (
    <div id={mapContainerId} />
  );
};
