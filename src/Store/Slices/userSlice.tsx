import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userInfo: {
    id: '',
    username: '',
    email: '',
    profileImg: '',
  },
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    clearUser(state) {
      state.isAuthenticated = false;
      state.userInfo = initialState.userInfo;
    },
  },
});

export const { setUserInfo, clearUser } = userSlice.actions;

export default userSlice.reducer;
