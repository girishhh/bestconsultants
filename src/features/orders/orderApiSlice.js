import { apiSlice } from '../api/apiSlice';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => ({
        url: `/orders`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    }),
    logOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/${orderId}/log`,
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    })
  }),
});

export const { useCreateOrderMutation, useLogOrderMutation } = orderApiSlice;
export default orderApiSlice;
