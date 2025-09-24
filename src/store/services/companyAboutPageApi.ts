import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyAboutPageApi = createApi({
  reducerPath: "companyAboutPageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCompanyAbouts: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "company-abouts",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetCompanyAboutsQuery } = companyAboutPageApi;
