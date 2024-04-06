// Need to use the React-specific entry point to import createApi
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { jwtDecode } from "jwt-decode";
import { AccessTokenQuery } from "../interfaces/AccessTokenQuery";
import { UserTokenState } from "../interfaces/UserTokenState";
import {
  onAuthAction,
  onEmailAction,
  onPhoneAction,
  onTokenAccess,
} from "../slices/authSlice";
import { RootState } from "../store";

export const baseQueryId = (baseUrl: string) => {
  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).reducerAuth.accessToken;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  });
};

export const baseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
  baseUrl: string
) => {
  const rawBaseQuery = await baseQueryId(baseUrl);
  const result = await rawBaseQuery(args, api, extraOptions);
  return result;
};

export const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
  baseQueryFN: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  >
) => {
  const { dispatch } = api;
  let result = await baseQueryFN(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = (await baseQuery(
      {
        url: "auth/refresh",
        method: "POST",
        body: {},
      },
      api,
      extraOptions,
      "http://79.174.93.234/api" || ""
    )) as QueryReturnValue<
      AccessTokenQuery,
      FetchBaseQueryError,
      FetchBaseQueryMeta
    >;

    // if (refreshResult.error) {
    //   if (window.location.pathname !== "/login") {
    //     window.location.href = `/login`;
    //   }
    // }

    if (refreshResult && refreshResult.data) {
      const { accessToken } = refreshResult.data;
      const { payload } = await jwtDecode<UserTokenState>(accessToken);

      dispatch(onAuthAction());
      dispatch(onTokenAccess(accessToken));
      dispatch(onEmailAction(payload.email));
      dispatch(onPhoneAction(payload.phone));

      result = await baseQueryFN(args, api, extraOptions);
    }
  }
  return result;
};

export const basicApi = createApi({
  reducerPath: "/",
  baseQuery: async (args, api, extraOptions) => {
    return await baseQueryWithReAuth(
      args,
      api,
      extraOptions,
      async (args, api, extraOptions) =>
        await baseQuery(
          args,
          api,
          extraOptions,
          "http://79.174.93.234/api" || ""
        )
    );
  },
  endpoints: () => ({}),
  tagTypes: [],
});
