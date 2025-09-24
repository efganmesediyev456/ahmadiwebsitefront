import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyTeamAboutApi = createApi({
  reducerPath: "companyTeamAboutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getcompanyTeamAbout: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "company-team-about",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetcompanyTeamAboutQuery } = companyTeamAboutApi;
