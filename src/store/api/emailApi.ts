import { basicApi } from "./api";

export const emailApiSlice = basicApi.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation<any, any>({
      query: ({ email, orderId, address, qrCode }) => ({
        url: `mail/createOrder`,
        method: "POST",
        body: {
          orderId,
          address,
          qrCode,
        },
        params: {
          email,
        },
      }),
    }),
  }),
});

export const { useSendEmailMutation } = emailApiSlice;
