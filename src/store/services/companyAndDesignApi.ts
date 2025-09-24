import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyAndDesignApi = createApi({
  reducerPath: "companyAndDesignApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCompanyAndDesign: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "who-we-do-items",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetCompanyAndDesignQuery } = companyAndDesignApi;
