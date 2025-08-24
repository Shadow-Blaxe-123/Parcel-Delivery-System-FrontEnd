import type { IResponse, IUser } from "@/types";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IResponse<IUser[]>, unknown>({
      query: () => ({
        url: "/user/get-all",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getParcels: builder.query<IResponse<IUser[]>, unknown>({
      query: () => ({
        url: "/user/get-all",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery } = adminApi;
