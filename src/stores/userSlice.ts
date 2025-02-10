import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    username: "John",
  },
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    resetUsername: (state) => {
      state.username = "John";
    },
  },
});

// export type UserState = ReturnType<typeof userSlice.getInitialState>;

export const { setUsername, resetUsername } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
