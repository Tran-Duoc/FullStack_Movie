import { createSlice } from "@reduxjs/toolkit";

interface Auth {
  isAuthenticated: boolean;
}

const initialState: Auth = {
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
