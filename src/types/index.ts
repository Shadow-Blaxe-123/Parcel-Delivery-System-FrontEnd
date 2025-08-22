import type { store } from "@/store/store";

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
