import { Routes } from "../interfaces/Routes";
import { api } from "./api";

export const routesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPopularRoutes: builder.query<any, any>({
      query: () => ({
        url: `routes/popular`,
        method: "GET",
      }),
    }),
    getRouteById: builder.query<Routes, { id?: string }>({
      query: ({ id }) => ({
        url: `routes/${id}`,
        method: "GET",
      }),
    }),
    saveRoute: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `user/save-route/${id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetPopularRoutesQuery,
  useGetRouteByIdQuery,
  useSaveRouteMutation,
} = routesApiSlice;
