import type { store } from "@/store/store";
import type { ComponentType } from "react";

export type { ILoginRequest, ILoginResponse } from "@/types/auth.types";

export type { IUser, TRole } from "@/types/user.types";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
export interface IError {
  statusCode: number;
  success: boolean;
  message: string;
}

export interface IDashboard {
  title: string;
  url: string;
  component: ComponentType;
}
