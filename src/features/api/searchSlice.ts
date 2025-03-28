import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    search: builder.query<string[], string>({
      query: (q) => `search?q=${q}`,
    }),
  }),
});

export const { useLazySearchQuery } = apiSlice;
