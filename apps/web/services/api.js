import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverUrl =
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api` || "http://localhost:5000/api";
export const api = createApi({
  reduerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  tagType: [],
  endpoints: () => ({}),
});
