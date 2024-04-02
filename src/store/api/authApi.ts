import {
  offAuthAction,
  onEmailAction,
  onPhoneAction,
} from "../slices/authSlice";
import { basicApi } from "./api";

export const authApiSlice = basicApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body) => ({
        url: "auth/signin",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch }) {
        try {
          dispatch(offAuthAction());
          dispatch(onEmailAction(""));
          dispatch(onPhoneAction(""));
        } catch (err) {
          return;
        }
      },
    }),
  }),
});

export const { useLogoutMutation, useLoginMutation } = authApiSlice;
