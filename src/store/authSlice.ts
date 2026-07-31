import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  username: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  hydrated: boolean;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  hydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.hydrated = true;
    },
    clearCredentials: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.hydrated = true;
    },
    setHydrated: (state, action: PayloadAction<boolean>) => {
      state.hydrated = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setHydrated } =
  authSlice.actions;
export default authSlice.reducer;
