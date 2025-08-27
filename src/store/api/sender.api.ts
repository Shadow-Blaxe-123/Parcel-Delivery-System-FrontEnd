import type { IParcel, IResponse } from "@/types";
import { baseApi } from "./baseApi";

export const senderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMyParcels: builder.query<IResponse<IParcel[]>, unknown>({
      query: (param) => ({
        url: "/parcel/get-all/me",
        method: "GET",
        params: param ? param : {},
      }),
      providesTags: ["Parcel"],
    }),
    createParcel: builder.mutation<IResponse<IParcel>, IParcel>({
      query: (data) => ({
        url: "/parcel/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllMyParcelsQuery } = senderApi;
