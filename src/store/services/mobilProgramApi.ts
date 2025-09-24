import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mobilProgramApi = createApi({
  reducerPath: "mobilProgramApi",
  baseQuery: fetchBaseQuery({
    baseUrl:import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMobilPrograms: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "mobil-programs",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetMobilProgramsQuery } = mobilProgramApi;
