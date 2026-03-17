import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverUrl =
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api` ||
  "http://20.204.216.223:5000/api";
export const api = createApi({
  reduerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Projects"],
  endpoints: () => ({}),
});
