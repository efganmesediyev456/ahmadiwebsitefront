import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamsApi = createApi({
  reducerPath: "teamsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTeams: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "teams",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetTeamsQuery } = teamsApi;
