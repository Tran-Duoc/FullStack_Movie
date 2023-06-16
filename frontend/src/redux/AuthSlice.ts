import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
