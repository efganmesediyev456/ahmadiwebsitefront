import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workFlowApi = createApi({
  reducerPath: "workFlowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorkFlows: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "work-flows",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetWorkFlowsQuery } = workFlowApi;
