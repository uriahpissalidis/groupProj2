import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import availabilityReducer from "../features/availabilities/availabilitySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    availabilities: availabilityReducer,
  },
});
