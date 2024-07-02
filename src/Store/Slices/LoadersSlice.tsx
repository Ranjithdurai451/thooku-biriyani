import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routingLoader: false,
};
const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setRoutingLoader: (state, action) => {
      state.routingLoader = action.payload;
    },
  },
});

export const { setRoutingLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
