import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uslugiItemApi = createApi({
  reducerPath: "uslugiItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUslugiItem: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "uslugi-items",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetUslugiItemQuery } = uslugiItemApi;
