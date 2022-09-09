import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMode } from "../models/models";

export const mockableApi = createApi({
  reducerPath: "mock/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://demo7919674.mockable.io/",
  }),
  endpoints: (build) => ({
    getInitialState: build.query<IMode[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetInitialStateQuery } = mockableApi;
