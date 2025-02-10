import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
