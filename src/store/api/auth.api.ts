import type { ILoginRequest, ILoginResponse, IResponse } from "@/types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<ILoginResponse>, ILoginRequest>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = authApi;
