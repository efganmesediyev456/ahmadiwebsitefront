import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPortfolios: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "portfolios",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetPortfoliosQuery } = portfolioApi;
