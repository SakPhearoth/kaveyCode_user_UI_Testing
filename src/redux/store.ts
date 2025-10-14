import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist"; 
import { videoApi } from "./services/videoApi";
import { courseApi } from "./services/courseApi";

const persistConfig = {
  key: "root",
  storage,
};

// If you don't have specific slices yet, provide a placeholder reducer to
// satisfy combineReducers and avoid runtime warnings from redux-persist.
const placeholderReducer = (state = {}) => state;

const rootReducer = combineReducers({
  [videoApi.reducerPath]: videoApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      videoApi.middleware,
      courseApi.middleware
    ),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
