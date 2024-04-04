import { configureStore } from "@reduxjs/toolkit";
import { basicApi } from "./api/api";
import reducerAuth from "./slices/authSlice";
import reducerMap from "./slices/mapSlice";

export const store = configureStore({
  reducer: {
    reducerAuth,
    reducerMap,
    [basicApi.reducerPath]: basicApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    basicApi.middleware,
  ],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
