import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    fetchUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { fetchUserData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
