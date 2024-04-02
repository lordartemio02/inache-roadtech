import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken?: string;
  isAuth?: boolean;
  email?: string;
  phone?: string;
  id?: string;
}

const initialState: AuthState = {
  accessToken: "",
  isAuth: false,
  email: "",
  phone: "",
  id: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onAuthAction: (state: AuthState) => {
      state.isAuth = true;
    },
    offAuthAction: (state: AuthState) => {
      state.isAuth = false;
      state.accessToken = "";
    },
    onTokenAccess: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    onEmailAction: (state: AuthState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    onPhoneAction: (state: AuthState, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  offAuthAction,
  onAuthAction,
  onEmailAction,
  onTokenAccess,
  onPhoneAction,
} = authSlice.actions;

export default authSlice.reducer;
