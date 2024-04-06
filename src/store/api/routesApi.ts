import { basicApi } from "./api";

export const routesApiSlice = basicApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularRoutes: builder.query<any, any>({
      query: () => ({
        url: `routes/popular`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPopularRoutesQuery } = routesApiSlice;
