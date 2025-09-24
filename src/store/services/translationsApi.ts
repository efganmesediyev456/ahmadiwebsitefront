import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const translationsApi = createApi({
  reducerPath: "translationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getTranslations: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "translations",
        headers: {
          "Accept-Language": lang,
        },
      }),
      keepUnusedDataFor: 0, 
    }),
  }),
});

export const { useGetTranslationsQuery } = translationsApi;
