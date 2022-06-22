import { configureStore } from "@reduxjs/toolkit";

import muffinsReducer from "./muffins";

const store = configureStore({
  reducer: {
    muffins: muffinsReducer,
  },
});

export default store;
