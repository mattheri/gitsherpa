import { configureStore } from "@reduxjs/toolkit";

import appReducers from "app/appSlice";
import authReducers from "auth/authSlice";

export default configureStore({
  reducer: {
    app: appReducers,
    auth: authReducers,
  },
});
