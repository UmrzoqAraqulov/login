import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: JSON.parse(localStorage.getItem("TOKEN")) || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state) {
      localStorage.setItem("TOKEN", true);
      state.isAuth = true;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authAction = authSlice.actions;

export default store;
