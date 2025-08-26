import type { IParcel, IResponse, IUser } from "@/types";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IResponse<IUser[]>, unknown>({
      query: (params) => ({
        url: "/user/get-all",
        method: "GET",
        params: params ? params : {},
      }),
      providesTags: ["User"],
    }),
    blockUser: builder.mutation<
      IResponse<IUser>,
      { id: string; isBlocked: boolean }
    >({
      query: ({ id, isBlocked }) => ({
        url: `/user/update/${id}`,
        method: "PATCH",
        body: { isBlocked: isBlocked },
      }),
      invalidatesTags: ["User"],
    }),
    getParcels: builder.query<IResponse<IParcel[]>, unknown>({
      query: (param) => ({
        url: "/parcel/get-all",
        method: "GET",
        params: param ? param : {},
      }),
      providesTags: ["Parcel"],
    }),
    blockParcel: builder.mutation<
      IResponse<IParcel>,
      { trackingId: string; isBlocked: boolean }
    >({
      query: ({ trackingId, isBlocked }) => ({
        url: `/parcel/update/${trackingId}`,
        method: "PATCH",
        body: { isBlocked: isBlocked },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetParcelsQuery,
  useBlockUserMutation,
  useBlockParcelMutation,
} = adminApi;
