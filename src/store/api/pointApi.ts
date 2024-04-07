import { Point } from "../interfaces/Routes";
import { api } from "./api";

export const pointApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPointById: builder.query<Point, { id?: string }>({
      query: ({ id }) => ({
        url: `points/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPointByIdQuery } = pointApiSlice;
