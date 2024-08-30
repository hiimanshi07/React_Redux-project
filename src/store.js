import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./redux/DashboardSlice";

const store = configureStore({
  reducer: {
    Himanshi: dashboardReducer,
  },
});

export default store;
