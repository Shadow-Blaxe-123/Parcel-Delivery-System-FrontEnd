import type { IParcel, IResponse, IUser } from "@/types";
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
    getParcels: builder.query<IResponse<IParcel[]>, unknown>({
      query: (param) => ({
        url: "/parcel/get-all",
        method: "GET",
        params: param ? param : {},
      }),
      providesTags: ["Parcel"],
    }),
  }),
});

export const { useGetUsersQuery, useGetParcelsQuery } = adminApi;
