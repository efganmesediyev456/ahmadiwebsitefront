import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyAboutApi = createApi({
  reducerPath: "companyAboutApi",
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

export const { useGetCompanyAboutsQuery } = companyAboutApi;
