import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const managementsApi = createApi({
  reducerPath: "managementsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getManagements: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "managements",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetManagementsQuery } = managementsApi;
