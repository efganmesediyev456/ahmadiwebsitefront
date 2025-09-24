import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const settingsApi = createApi({
  reducerPath: "settingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSettings: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "site-settings",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetSettingsQuery } = settingsApi;
