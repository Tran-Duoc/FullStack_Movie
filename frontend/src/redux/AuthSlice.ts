import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/auth.type";
import { getAccessToken, getProfileFromLS } from "../utils/LocalStorage.util";
interface Auth {
  isAuthenticated: boolean;
  profile: Pick<User, "name"> | null;
}

const initialState: Auth = {
  isAuthenticated: false,
  profile: getProfileFromLS(),
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    setProfile: (state, action: PayloadAction<Pick<User, "name"> | null>) => {
      state.profile = action.payload;
    },
  },
});

export const { setIsAuthenticated, setProfile } = authSlice.actions;

export default authSlice.reducer;
