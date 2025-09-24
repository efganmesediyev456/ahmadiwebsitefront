import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partnerApi = createApi({
  reducerPath: "partnerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPartners: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "partners",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetPartnersQuery } = partnerApi;
