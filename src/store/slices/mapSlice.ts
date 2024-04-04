import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mapContainerId, destroyMap } from "../../services/yandexMap";

export interface TState {
  id: string;
}

const initialState: TState = {
  id: mapContainerId,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    unloadMap: () => {
      destroyMap();
    },
  },
});

// Action creators are generated for each case reducer function
export const { unloadMap } = mapSlice.actions;

export default mapSlice.reducer;
