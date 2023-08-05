import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: [],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});

export default apiSlice;
