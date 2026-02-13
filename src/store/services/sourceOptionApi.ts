import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sourceOptionApi = createApi({
  reducerPath: "sourceOptionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSourceOption: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "source-options",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetSourceOptionQuery } = sourceOptionApi;
