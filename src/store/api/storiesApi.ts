import { api } from "./api";

export const storiesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createStory: builder.mutation<any, any>({
      query: ({ user_id, point_id, description, image }) => {
        var bodyFormData = new FormData();
        bodyFormData.append("file", image);
        return {
          url: `file`,
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data;",
          },
          params: {
            user_id,
            point_id,
            description,
          },
          body: bodyFormData,
          formData: true,
        };
      },
    }),
  }),
});

export const { useCreateStoryMutation } = storiesApiSlice;
