import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userInfo: {},
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
      state.userInfo = {};
    },
    setUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    setAvatar: (state, action) => {
      state.userInfo.data = { ...state.userInfo.data, avatar: action.payload };
    },
  },
});
export const { login, logOut, setUserInfo, setAvatar } = authSlice.actions;
export default authSlice.reducer;
