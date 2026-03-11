import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverUrl = process.env.SERVER_URL || "http://localhost:5000";
export const api = createApi({
  reduerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  tagType: [],
  endpoints: () => ({}),
});
