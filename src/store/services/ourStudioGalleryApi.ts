import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ourStudioGalleryApi = createApi({
  reducerPath: "ourStudioGalleryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOurStudioGallery: builder.query<any, string | undefined>({
      query: (lang = "az") => ({
        url: "our-studio-galleries",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetOurStudioGalleryQuery } = ourStudioGalleryApi;
